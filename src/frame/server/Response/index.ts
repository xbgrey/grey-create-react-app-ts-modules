/**
 * AIP相应数据
 */
export default class ApiRequest<T=any> {

    /** 错误信息 */
    public er:any;

    /** 响应内容 */
    public body:T;
}
