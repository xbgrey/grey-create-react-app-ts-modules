import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Route as MyRoute, INode } from '.'

export default class ChildReact extends React.PureComponent<IProps> {

    /**
     * 构造函数
     */
    constructor(props: IProps) {
        super(props);
    }

    /**
     * 获取路由的React结构
     * @param name 节点名称
     */
    private getRouteReact(name: string):JSX.Element[] {

        const routeList: INode[] = MyRoute.getNodeChilds(name);
        const routeReact: JSX.Element[] = [];
        for (let i = 0; i < routeList.length; i++) {
            routeReact.push(<Route key={i} {...routeList[i].route} />)
        }
        return routeReact.map((value) => value);
    }

    /**
     * 自动首页
     */
    private getIndex(): JSX.Element {
        const { index } = this.props;
        if (index) {
            return <Route key='index' render={() => <Redirect to={index} />} />
        } else {
            return null;
        }
    }

    render() {
        const { name } = this.props;
        return (
            <div>
                {this.getRouteReact(name)}
                {this.getIndex()}
            </div>
        );
    }
}

/** 组建的props接口 */
interface IProps {

    /** 节点名称 */
    name: string;

    /** 首页地址 */
    index?: string;
}