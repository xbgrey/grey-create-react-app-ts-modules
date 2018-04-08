import * as React from 'react';
import Card from 'antd/lib/card';
import { UIBasic, IPropsBasic } from 'src/frame/modules';
import { connect, ReduxState } from 'src/redux';
import ModulesState from './Modules.State';
import ModulesAction from './Modules.Action';
import Button from 'antd/lib/button';
import UserNode from 'src/redux/reducers/user/Node';

class UIDemo extends UIBasic<IProps, ModulesState> {

    /**
     * 构造函数
     */
    constructor(props: IProps) {
        super(props, ModulesAction);
    }

    render() {
        const user:UserNode = this.props.user;
        return (
            <Card title="UI测试" className="App" style={{width:600,margin:'20px auto'}} >
                <Button onClick={ModulesAction.fnSubmit}>试试看</Button>
                <Button onClick={ModulesAction.fnSubmit}>{user.token}</Button>
            </Card>
        );
    }
}

/** 组建的props接口 */
interface IProps extends ReduxStatePart, IPropsBasic {
}

/** 全局状态片段对象 */
class ReduxStatePart {

    /** 用户的token */
    public user ?: UserNode;

    constructor(state: ReduxState) {
        this.user = state.user;
    }
}

export default connect(ReduxStatePart)(UIDemo)