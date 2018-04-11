import * as React from 'react';
import Card from 'antd/lib/card';
import { UIBasic, IPropsBasic } from 'src/frame/modules';
import { connect, ReduxState } from 'src/redux';
import ModulesState from './Modules.State';
import ModulesAction from './Modules.Action';
import UserNode from 'src/redux/reducers/user/Node';

class UIDemo extends UIBasic<IProps, ModulesState> {

    /**
     * 构造函数
     */
    constructor(props: IProps) {
        super(props, ModulesAction);
    }

    render() {
        return (
            <Card title="UI6" style={{ width: 600, margin: '20px auto' }} >
            </Card>
        );
    }
}

/** 全局数据片段 */
interface IReduxStatePart {
    /** 用户的token */
    user?: UserNode;
}

/** 组建的props接口 */
interface IProps extends IReduxStatePart, IPropsBasic {
}

export default connect((state: ReduxState): IReduxStatePart => {
    return {
        user: state.user,
    };
})(UIDemo);