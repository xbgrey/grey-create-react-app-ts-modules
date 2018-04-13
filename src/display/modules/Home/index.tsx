import * as React from 'react';
import { ModulesBasic, IPropsBasic } from 'src/frame/modules';
import { connect, ReduxState } from 'src/redux';
import ModulesState from './Modules.State';
import ModulesAction from './Modules.Action';
import UIComponents from './UI.Components';

const css = require('./index.scss');

class Home extends ModulesBasic<IProps, ModulesState> {

    /** 组建状态 */
    public state: ModulesState = new ModulesState();

    /** 构造函数 */
    constructor(props: IProps) {
        super(props, ModulesAction);
    }

    // 这里尽量只调用UI组件
    render() {
        const { } = this.props; // 获取你的props数据
        return (
            <div className={css.modules}>
                <UIComponents />
            </div>
        );
    }
}

/** 全局状态数据片段接口 */
interface IReduxStatePart {
}

/** 组建的props接口 */
interface IProps extends IReduxStatePart, IPropsBasic {
}

export default connect((state: ReduxState): IReduxStatePart => ({
    /** 对IReduxStatePart接口的实现 */
}))(Home);