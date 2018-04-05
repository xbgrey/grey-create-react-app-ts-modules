import reducers from '../reducers';
import UserNode from '../reducers/user/Node';

export default class ReduxState {

    /**
     * 用户数据
     */
    public user: UserNode = reducers.user.reducer as any;

    // /**
    //  * 环境数据
    //  * @type {*}
    //  */
    // env = reducers.Env.reducer;

    /**
     * 当前的页面数据
     * @type {*}
     */
    public currentPage: any = reducers.currentPage.reducer;

    // /**
    //  * 配置数据
    //  * @type {*}
    //  */
    // config = reducers.Config.reducer;
}

