import { CallType } from 'src/utils/ajax';
import { Response } from '../';

/** Api请求数据 */
export default class ApiRequest {

    /** 发送请求的发起对象 */
    public target:any = null;

    /** 请求类型 */
    public type:CallType = CallType.GET;

    /** api地址 */
    public uri:string;

    /** 回掉函数 */
    public callback:(value:Response)=>void = null;

    /** 请求参数 */
    public params:any = {};

    /** 请求头部信息 */
    public options:any = {};

    /** 是否显示错误信息 */
    public isShowModal:boolean = true;

    /**
     * 构造函数
     * @param target  发送请求的发起对象 (传null表示可以不限制请求)
     * @param type  请求类型
     * @param uri api地址
     * @param params  请求参数
     */
    constructor(target:any, type:CallType, uri:string, params:any) {
        this.target = target;
        this.uri = uri;
        this.params = params;
        this.type = type;
    }
}
