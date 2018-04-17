
import { IRoute } from '.';

export default interface INodeTree {

    /** 父亲节点名称 */
    parent: string;

    /** 路由参数 */
    route: IRoute;

    /** 孩子列表 */
    childList: INodeTree[];
}