import * as React from 'react';
import { ModulesBasic, IPropsBasic, ModulesRoot } from 'kts-scaffold-framework/modules';
import { connect } from 'src/redux';
import ReduxState, { } from 'src/redux/ReduxState';
import ModulesState from './Modules.State';
import ModulesAction from './Modules.Action';
import ModulesRoute, { Switch } from './Modules.Route';
import UIComponents from './UI.Components';

const css = require('./index.scss');

/** 全局数据片段数据接口 */
interface IReduxStatePart {
    cToken: string;
}

/** 组建的props接口 */
interface IProps extends IReduxStatePart, IPropsBasic {
}

/** 绑定全局数据到props */
@connect((state: ReduxState): IReduxStatePart => ({
    cToken: state.user.cToken
}))
export default class Home extends ModulesBasic<IProps, ModulesState> {

    /** 组建状态 */
    public state: ModulesState = new ModulesState();

    /** 构造函数 */
    constructor(props: IProps) {
        super(props, ModulesAction);
    }

    // 这里尽量只调用UI组件
    render() {
        return (
            <ModulesRoot action={ModulesAction}>
                <div key={this.state.key} className={css.modules}>
                    <UIComponents />
                    <Switch>{ModulesRoute.getChildReact('/demo')}</Switch>
                </div>
            </ModulesRoot>
        );
    }
}