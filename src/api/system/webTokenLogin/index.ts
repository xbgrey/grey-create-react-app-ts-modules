import { Request, Response } from 'kts-scaffold-framework/server';
import { CallType } from 'kts-scaffold-framework/utils/ajax';
import { Urls } from 'src/entry/constant';
import ApiBasic from 'src/api/ApiBasic';
import IData from './IData';
import IOptions from './IOptions';

/**
 * 这里位置描述下api的内容是什么
 * 如果数据有时间格式，统一转换成 moment 对象
 */
class WebTokenLogin extends ApiBasic<IOptions, IData> {

    /** api逻辑的实现入口 */
    public async api(option: IOptions): Promise<Response<IData>> {

        const req: Request = new Request(CallType.POST, Urls.webTokenLogin, this.working(option));

        let data: Response<IData> = await this.call(req);

        // 去掉注释开启数据加工
        // if(data.er){
        //     data = new Response<IData>(data.er);
        // }else{
        //     data = new Response<IData>(data.er, new Data(data.body));
        // }

        /* ---- 如果有数据处理写在下面 ---- */

        return data;
    }

    /** 
     * 对入惨加工
     * @param option 原始如参数
     */
    private working(option: IOptions): any {
        return option;
    }
}

/** 对IData接口的实现 */
// class Data implements IData{
//
//     /** 构造函数 */
//     constructor(body:any) {
//     }
// }

export default new WebTokenLogin().run;
