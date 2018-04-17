export default interface INodeTree {
    /** 节点名称 */
    nodeName: string;

    /** 父亲节点名称 */
    parent: string;

    /** 页面标题 */
    title?: string;

    /** 路由地址 */
    path?: string;

    /** 孩子列表 */
    childList: INodeTree[];
}