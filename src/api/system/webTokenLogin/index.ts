import { Agent, Request, Response } from 'src/frame/server';
import { Urls } from 'src/entry/constant';
import { CallType } from 'src/utils/ajax';
import IData from './IData';
import IOptions from './IOptions';

/**
 * 用户登录
 * @param target 请求发起对象 
 * @param option 参数
 */
export default async function webTokenLogin(target:any, option: IOptions): Promise<Response<IData>> {
    const req: Request = new Request(target, CallType.POST, Urls.webTokenLogin, option);
    const res: Response<IData> = await Agent.instance.callGlobal(req);
    return res;
}
