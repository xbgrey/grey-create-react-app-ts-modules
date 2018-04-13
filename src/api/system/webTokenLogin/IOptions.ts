/** 
 * 入参数据数据接口
 * 如果数据有时间格式，统一转换成 moment 对象
 */
export default interface IOptions {
    /** 密码 */
    password: string;

    /** 用户名 */
    loginName: string;
}