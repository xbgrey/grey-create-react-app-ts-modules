import { Route } from 'src/routes';

const parentName: string = 'home'; // 路由的跟节点；

Route.addNode(
    parentName,
    { nodeName: 'demo', path: '/demo', component: require('./Demo').default },
);

export default {
    getChildReact: (index?: string) => {
        return Route.getChildReact(parentName, index);
    },
};

export {
    Switch
} from 'react-router-dom';