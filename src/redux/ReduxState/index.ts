import reducers from '../reducers';
import UserNode from '../reducers/user/Node';
import EnvINode from '../reducers/env/INode';
import ConfigINode from '../reducers/config/INode';
import SystemNode from '../reducers/system/Node';
import INodeTree from 'src/routes/INodeTree';

/** 全局状态的跟节点 */
export default class ReduxState {

    /** 用户数据 */
    public user: UserNode = reducers.user.reducer as any;

    /** 环境数据 */
    public env: EnvINode = reducers.env.reducer as any;

    /** 配置数据 */
    public config: ConfigINode = reducers.config.reducer as any;

    /** 系统数据 */
    public system: SystemNode = reducers.system.reducer as any;

    /** 路由数据 */
    public routes: INodeTree = reducers.routes.reducer as any;
}