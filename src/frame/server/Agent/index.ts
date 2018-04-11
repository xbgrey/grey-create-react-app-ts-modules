import Superagent from 'src/utils/ajax/Superagent';
import { Request, Response } from '../';
import { NodeEnvType } from 'src/entry/constant';
import { MyStore, reducers } from 'src/redux';
import Message from 'antd/lib/message';

/** AIP基础类 */
export default class Agent {

    /** 当前实例 */
    private static _instance: Agent;

    /** 获取当前实例 */
    public static get instance(): Agent {
        if (!Agent._instance) {
            Agent._instance = new Agent();
        }
        return Agent._instance;
    }

    /** 构造函数 */
    constructor() {
        if (Agent._instance) {
            throw ('[api.Agent]对象为单利');
        }
    }

    /**
     * 调用回掉函数
     * @param value 参数
     * @param fns 函数集合
     */
    private runCallback = (value: any, ...fns: Array<(value: any) => void>) => {
        fns.forEach(fn => {
            if(typeof fn === 'function')
                fn(value);
        });
    }

    /**
     * 请求头（全局）
     */
    private getDomainGlobal = (): string => {
        const { config, env } = MyStore.instance.getState();
        switch (env.NODE_ENV) {
            case NodeEnvType.开发环境:
                return config.rootConfig.DEV_URI;
            case NodeEnvType.生产环境:
                return config.rootConfig.API_URI;
            case NodeEnvType.测试环境:
                return config.rootConfig.TEST_URI;
            default:
                console.error('[api]环境变量异常', env);
                return '';
        }
    }

    /**
     * 请求头（当前公司）
     */
    private getDomainZone = (): string => {
        return 'xxxx';
    }

    /**
     * 提示消息管理
     * @param request 请求消息头
     * @param message 发送的消息
     */
    private showMessage = (request: Request, message: string): void => {
        if (request.isShowModal === false) {
            return null;
        }
        Message.error(message);
    }

    /**
     * 向服务器发送一个请求
     * @param request 一个请求
     * @param domain 请求地址头
     * @param mock 是否用mock数据
     */
    private call = (request: Request, domain: string, mock: boolean): Promise<Response> => {
        return new Promise((resolve: (value: Response) => void) => {

            MyStore.instance.dispatch(reducers.system.ActionTypes.addLoading, request.uri); // 添加loading

            const options: any = this.getOptions(request.options); // 消息头
            const { env } = MyStore.instance.getState();
            const superagentCallback = (er, body) => {

                MyStore.instance.dispatch(reducers.system.ActionTypes.removeLoading, request.uri); // 删除loading

                const info: Response = new Response(); // 返回数据

                // 是否失败
                if (er) {
                    info.er = er;
                    this.showMessage(request, '服务器异常');
                } else {
                    if (body.ok) {
                        info.body = body.body;
                    } else {
                        info.er = body;
                        this.showMessage(request, body.status.description || '系统错误');
                    }
                }

                this.runCallback(info, request.callback, resolve); // 调用回掉
            };

            if (mock && env.IS_MOCK && window['$$_kxl_mock'] && window['$$_kxl_mock'][request.uri]) {
                setTimeout(
                    () => {
                        console.info('[mock][' + request.uri + ']', window['$$_kxl_mock'][request.uri]);
                        superagentCallback(null, window['$$_kxl_mock'][request.uri]);
                    }, 100);
            } else {
                Superagent.call(request.type, domain + request.uri, superagentCallback, request.params, options);
            }
        });
    }

    /**
     * 获取可用的 options 参数。
     * @param options 
     */
    private getOptions = (options: any): any => {
        const res = { ...options };
        const token = MyStore.instance.getState().user.token;

        // token是否存在
        if (token) {
            res['Authorization'] = token; // 添加用户token
        }

        return res;
    }

    /**
     * 向服务器发送一个请求(全局)
     * @param request 一个请求
     * @param mock 是否用mock数据
     */
    public callGlobal = (request: Request, mock: boolean = false): Promise<Response> => {
        return this.call(request, this.getDomainGlobal(), mock);
    };

    /**
     * 向服务器发送一个请求(当前公司)
     * @param request 一个请求
     * @param mock 是否用mock数据
     */
    public callZone = (request: Request, mock: boolean = false): Promise<Response> => {
        return this.call(request, this.getDomainZone(), mock);
    };
}