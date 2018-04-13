import { Request, Response } from 'src/frame/server';
import { Urls } from 'src/entry/constant';
import { CallType } from 'src/utils/ajax';
import IData from './IData';
import IOptions from './IOptions';
import ApiBasic from 'src/api/ApiBasic';

/** 用户登录 */
class WebTokenLogin extends ApiBasic<IOptions, IData> {
    public async api(option: IOptions): Promise<Response<IData>> {
        const req: Request = new Request(CallType.POST, Urls.webTokenLogin, option);
        return await this.call(req);
    }
}

export default new WebTokenLogin().run;
