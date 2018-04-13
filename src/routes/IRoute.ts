import { RouteProps } from 'react-router-dom';

export default interface IRoute extends RouteProps {
    /** 页面标题 */
    title?: string;

    /** 页面图标 */
    ico?: JSX.Element;

    /** 节点名称 */
    nodeName: string;
}