import { MyStore } from 'src/redux';
import { Response } from 'src/frame/server';
import { NodeEnvType } from 'src/entry/constant';
import { Agent, Request } from 'src/frame/server';

export default abstract class AipBasic<O, D> {

    constructor() {
        this.api = this.api.bind(this);
    }

    /** 像服务器发送请求 */
    public call = async (request: Request, mock: boolean = false): Promise<any> => {
        request = {
            ...request,
            options: this.getOptions(request.options)
        };
        return await Agent.instance.call(request, this.domain, mock);
    }

    /** 执行api */
    public run = async (option: O): Promise<Response<D>> => {
        return await this.api(option);
    }

    /** 抽象方法（子类api逻辑的实现入口） */
    protected async api(option: O): Promise<Response<D>> {
        throw '请在这里实现API的入口';
    }

    /**
     * 请求头（全局）
     */
    private get domain(): string {
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
}