import reducers from '../reducers';
import UserNode from '../reducers/user/Node';
import EnvINode from '../reducers/env/INode';
import ConfigINode from '../reducers/config/INode';

export default class ReduxState {

    /**
     * 用户数据
     */
    public user: UserNode = reducers.user.reducer as any;

    /**
     * 环境数据
     * @type {*}
     */
    public env:EnvINode = reducers.env.reducer as any;

    /**
     * 当前的页面数据
     */
    public currentPage: any = reducers.currentPage.reducer;

    /**
     * 配置数据
     */
    public config: ConfigINode = reducers.config.reducer;
}

