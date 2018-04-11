import * as React from 'react';
import { Button, Table, Card } from 'antd';
import { ModulesBasic, IPropsBasic } from 'src/frame/modules';
import { connect, ReduxState, MyStore } from 'src/redux';
import ModulesState from './Modules.State';
import ModulesAction from './Modules.Action';
import ModulesConfig from './Modules.Config';

const css = require('./index.scss');

const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}];

class Page3 extends ModulesBasic<IProps, ModulesState> {

    /** 组建状态 */
    public state: ModulesState = new ModulesState();

    /** 构造函数 */
    constructor(props: IProps) {
        super(props, ModulesAction);
    }

    render() {
        const user = MyStore.instance.getState().user;
        return (
            <Card title="Page3" className={css.App} style={{ width: 800, margin: '20px auto' }} >
                <Button onClick={ModulesAction.fnSubmit} >{this.state.a}</Button>
                <Button onClick={ModulesAction.fnSubmit} >{user.token}</Button>
                <Button onClick={ModulesAction.fnSubmit} style={{ marginBottom: 20 }} >{this.state.b}</Button>
                <Table dataSource={dataSource} columns={ModulesConfig.columns} />
            </Card>
        );
    }
}

/** 全局数据片段 */
interface IReduxStatePart {
    /** 用户的token */
    token?: string;
}

/** 组建的props接口 */
interface IProps extends IReduxStatePart, IPropsBasic {
}

export default connect((state: ReduxState): IReduxStatePart => {
    return {
        token: state.user.token,
    };
})(Page3);