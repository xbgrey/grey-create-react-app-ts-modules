/*
需要配置路由请打开配置，已下为实例代码

import { Route } from 'src/routes';

Route.addNode(
    Route.ROOT_NAME,
    { nodeName: 'page1', path: '/page1', component: require('./Page1').default },
);

export default {
    getChildReact:(index:string)=>(Route.getChildReact(Route.ROOT_NAME, index)),
}
*/