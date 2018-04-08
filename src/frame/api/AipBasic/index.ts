import Superagent from 'src/utils/ajax/Superagent';
import { ApiRequest, ApiResponse } from 'src/frame/api';
import { NodeEnvType } from 'src/entry/constant'
import { MyStore } from 'src/redux';

/** AIP基础类 */
export default abstract class AipBasic {

    /**
     * 调用回掉函数
     * @param value {*} 参数
     * @param fns {Function} 函数集合
     */
    private fnRunCallback = (value, ...fns) => {
        fns.forEach(fn => {
            if (typeof fn === 'function')
                fn(value);
        })
    };

    /**
     * 请求头（全局）
     * @returns {string}
     */
    private getDomainGlobal = (): string => {
        const {config, env} = MyStore.instance.getState();
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
    };

    /**
     * 请求头（当前公司）
     * @returns {string}
     */
    private getDomainZone = () => {
        return 'xxxx';
    };

    /**
     * 提示消息管理
     * @param request 请求消息头
     * @param message 发送的消息
     */
    private fnShowMessage = (request: ApiRequest, message: string) => {
        if (request.isShowModal === false) {
            return null;
        }
    };

    /**
     * 向服务器发送一个请求
     * @param request {ApiRequest} 一个请求
     * @param domain {string} 请求地址头
     */
    private fnCall = (request: ApiRequest, domain: string): Promise<ApiResponse> => {
        return new Promise((resolve: (value: ApiResponse) => void) => {
            /** 消息头 */
            const options: any = this.getOptions(request.options);
            return Superagent.fnCall(request.type, domain + request.uri, (er, body) => {
                /** 返回数据 */
                const info: ApiResponse = new ApiResponse();
                if (er) {
                    info.er = er;
                    this.fnShowMessage(request, '');
                } else {
                    if (body.ok) {
                        info.body = body.body;
                    } else {
                        info.er = body;
                        this.fnShowMessage(request, '');
                    }
                }
                //调用回掉
                this.fnRunCallback(info, request.callback, resolve);
            }, request.params, options);
        })
    };

    /**
     * 获取可用的 options 参数。
     * @param options {*}
     */
    private getOptions = (options) => {
        const res = {...options};
        const token = MyStore.instance.getState().user.token;

        //token是否存在
        if (token) {
            res['Authorization'] = token;//添加用户token
        }

        return res;
    };

    /**
     * 向服务器发送一个请求(全局)
     * @param request {ApiRequest} 一个请求
     */
    protected fnCallGlobal = (request) => {
        this.fnCall(request, this.getDomainGlobal());
    };

    /**
     * 向服务器发送一个请求(当前公司)
     * @param request {ApiRequest} 一个请求
     */
    protected fnCallZone = (request) => {
        this.fnCall(request, this.getDomainZone());
    };
}