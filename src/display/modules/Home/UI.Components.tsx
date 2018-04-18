import * as React from 'react';
import { UIBasic, IPropsBasic } from 'kts-scaffold-framework/modules';
import { connect } from 'src/redux';
import ReduxState, { } from 'src/redux/ReduxState';
import ModulesState from './Modules.State';
import ModulesAction from './Modules.Action';
import { Button } from 'antd';

class UIComponents extends UIBasic<IProps, ModulesState> {

    /** 构造函数 */
    constructor(props: IProps) {
        super(props, ModulesAction);
    }

    render() {
        const { } = this.props; // 获取你的props数据
        return (
            <div>
                <Button>你的组件</Button>
            </div>
        );
    }
}

/** 全局数据片段数据接口 */
interface IReduxStatePart {
}

/** 组建的props接口 */
interface IProps extends IReduxStatePart, IPropsBasic {
}

// 对IReduxStatePart的实现并绑定到组件上
export default connect((state: ReduxState): IReduxStatePart => ({

}))(UIComponents);