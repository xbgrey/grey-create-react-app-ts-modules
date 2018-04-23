import * as React from 'react';
import { INode, IRoute, INodeTree } from '.';
import { MyStore, reducers } from 'src/redux';
import { Route, Redirect } from 'react-router-dom';

const ROOT_NAME: string = 'root';

const routelist: INode[] = [];

/** 获取路由树 */
function getTree(): any {

    const rootNodeTree: INodeTree[] = [];

    getNodeChilds(ROOT_NAME).forEach((value: INode) => {
        setNodePathname(value);
        const item: INodeTree = {
            parent: value.parent,
            route: value.route,
            childList: []
        };
        addChildList(item);
        rootNodeTree.push(item);
    });

    function addChildList(nodeTree: INodeTree) {
        const nodeTreeList: INodeTree[] = [];
        getNodeChilds(nodeTree.route.nodeName).forEach((value: INode) => {
            setNodePathname(value);
            nodeTreeList.push({
                parent: value.parent,
                route: value.route,
                childList: []
            });
        });

        nodeTree.childList = nodeTreeList;

        nodeTreeList.forEach((value: INodeTree) => {
            addChildList(value);
        });
    }

    return rootNodeTree;
}

/**
 * 设置制定节点的 pathname
 * @param value 制定节点
 */
function setNodePathname(value: INode) {
    value.route.pathname = addPathname(value.route.pathname, value.route.path);

    let operate = value;
    for (; operate.parent !== ROOT_NAME && operate.route.path.indexOf('*') === 0;) {
        operate = getNode(operate.parent);
        value.route.pathname = addPathname(value.route.pathname, operate.route.path);
    }

    function addPathname(pathname: string[], path: string): string[] {
        pathname = pathname ? pathname.slice() : [];

        const pathArr: string[] = path.split('/');
        for (let i = pathArr.length - 1; i >= 0; i--) {
            if (pathArr[i]) {
                pathname.unshift(pathArr[i].replace(/\*/g, ''));
            }
        }

        return pathname;
    }
}

/**
 * 获取节点
 * @param name 节点名称
 */
function getNode(name: string): INode {
    for (let i = 0; i < routelist.length; i++) {
        if (routelist[i].route.nodeName === name) {
            return routelist[i];
        }
    }
    return null;
}

/**
 * 获取路由的获取路由节点
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
 * 获取当前状态的跟节点
 * @param pathname 当前状态全称
 */
function getNodePathname(pathname: string): INode {
    let pathnameAr: string[] = pathname.substring(1).split('/');
    let selected: INode[] = [];
    let optional: INode[] = [];

    routelist.forEach((value: INode) => {
        if (value.route.pathname.length === pathnameAr.length) {
            selected.push(value);
        }
    });

    if (selected.length === 1) {
        return selected[0];
    }

    for (let i = pathnameAr.length - 1; i >= 0; i--) {
        optional = selected.slice();
        selected = [];

        optional.forEach((node: INode) => {
            if (node.route.pathname[i] === pathnameAr[i] || node.route.pathname[i].indexOf(':') === 0) {
                selected.push(node);
            }
        });

        if (selected.length === 1) {
            return selected[0];
        }
    }

    return null;
}

/** 获取渲染节点数组 */
function getLevel(pathname: string): INode[] {
    let root = getNodePathname(pathname);
    let level: INode[] = [];

    if (root) {
        level = [root];
        for (; root.parent !== ROOT_NAME;) {
            root = getNode(root.parent);
            level.unshift(root);
        }
    }

    return level;
}

/**
 * 获取路由的React结构
 * @param name 节点名称
 * @param index 首页
 */
function getChildReact(name: string, index?: string): JSX.Element[] {
    const routeList: INode[] = getNodeChilds(name);
    const routeReact: JSX.Element[] = [];
    for (let i = 0; i < routeList.length; i++) {
        routeReact.push(<Route key={i} {...routeList[i].route} />);
    }

    if (index) {
        routeReact.push(<Route key="@@index" render={() => <Redirect to={index} />} />);
    }

    return routeReact.map((value) => value);
}

/**
 * 获取路由的React结构 <Route>
 * @param name 节点名称
 * @param props 扩展属性
 */
function getChildRoute(name: string, props: any): JSX.Element {
    const node: INode = getNode(name);
    return <Route {...node.route} {...props} />;
}

/**
 * 获取路由的默认首页 <Route>
 * @param index 默认首页
 */
function getChildRouteIndex(index: string): JSX.Element {
    return <Route render={() => <Redirect to={index} />} />;
}

/** 删除节点 */
function removeNode(name: string) {
    for (let i = 0; i < routelist.length; i++) {
        if (routelist[i].route.nodeName === name) {
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
                parent: parentName,
                route: value,
            });
        }
    });
    updateRedux();
}

/** 更新全局节点 */
function updateRedux() {
    MyStore.instance.dispatch(reducers.routes.ActionTypes.updateNode, getTree());
}

export default {
    removeNode,
    addNode,
    getNode,
    getNodeChilds,
    getChildReact,
    getChildRoute,
    getChildRouteIndex,
    getLevel,
    ROOT_NAME,
};