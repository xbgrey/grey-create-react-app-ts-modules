import * as React from 'react';
import { INode, IRoute } from '.';
import { Route } from 'react-router-dom';
// import { MyStore } from 'src/redux';

const ROOT_NAME: string = 'root';

const routelist: INode[] = [];

/**
 * 获取节点
 * @param name 节点名称
 */
function getNode(name: string): INode {
    for (let i = 0; i < routelist.length; i++) {
        if (routelist[i].name === name) {
            return routelist[i]
        }
    }
    return null;
}

/**
 * 获取节点的孩子列表
 * @param name 节点名称
 */
function getNodeChilds(name: string): INode[] {
    const sum: INode[] = [];
    for (let i = 0; i < routelist.length; i++) {
        if (routelist[i].parent === name) {
            sum.push(routelist[i]);
        }
    }
    return sum;
}

/**
 * 获取路由的React结构
 * @param name 节点名称
 */
function getRouteReact(name: string) {

    const routeList: INode[] = getNodeChilds(name);
    const routeReact: JSX.Element[] = [];
    for (let i = 0; i < routeList.length; i++) {
        routeReact.push(<Route key={i} {...routeList[i].route} />)
    }
    return routeReact.map((value) => value);
}

/** 删除节点 */
function removeNode(name: string) {
    for (let i = 0; i < routelist.length; i++) {
        if (routelist[i].name === name) {
            routelist.splice(i, 1);
        }
    }
    updateRedux();
}

/** 添加节点 */
function addNode(parentName: string, ...route: IRoute[]) {
    route.forEach(value => {
        if (getNode(value.nodeName)) {
            throw `节点冲突了[${name}]`;
        }

        if (value) {
            routelist.push({
                name: name,
                parent: parentName,
                route: value,
            })
        }
    });
    updateRedux();
}

/** 更新全局节点 */
function updateRedux() {

}

export default {
    removeNode,
    addNode,
    getNode,
    getNodeChilds,
    getRouteReact,
    ROOT_NAME,
}