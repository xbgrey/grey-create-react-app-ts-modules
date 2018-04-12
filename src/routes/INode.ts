import { IRoute } from '.';


/**
 * 路由节点
 */
export default interface INode {
    /** 检点名称 */
    name:string,

    /** 父亲节点名称 */
    parent:string,

    /** 路由参数 */
    route:IRoute;
}