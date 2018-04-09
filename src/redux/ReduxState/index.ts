import reducers from '../reducers';
import UserNode from '../reducers/user/Node';
import EnvINode from '../reducers/env/INode';
import ConfigINode from '../reducers/config/INode';

/** 全局状态的跟节点 */
export default class ReduxState {

    /** 用户数据 */
    public user: UserNode = reducers.user.reducer as any;

    /** 环境数据 */
    public env:EnvINode = reducers.env.reducer as any;

    /** 配置数据 */
    public config: ConfigINode = reducers.config.reducer as any;
}

