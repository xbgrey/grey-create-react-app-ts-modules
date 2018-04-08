import * as React from 'react';
import { ModulesBasic , IPropsBasic } from 'src/frame/modules';
import { connect, ReduxState } from 'src/redux';
import ModulesState from './Modules.State';
import ModulesAction from './Modules.Action';
import ModulesConfig from './Modules.Config';
import './index.scss';

// import UIComponents from './UI.Components';
import Button from 'antd/lib/button';
import Table from 'antd/lib/table';
import Card from 'antd/lib/card';

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

class Home extends ModulesBasic<ModulesState, IProps> {

    /**
     * 组建状态
     */
    state: State = new State();

    /**
     * 构造函数
     */
    constructor(props: IProps) {
        super(props, ModulesConfig.TEMPORARY_NAME, new ModulesState());
    }
 
    render() {
        return (
            <Card title="测试" className="App" style={{ width: 800, margin: '20px auto' }} >
                <Button onClick={ModulesAction.fnSubmit} >{'没有'}</Button>
                <Button onClick={ModulesAction.fnSubmit} >{this.props.token}</Button>
                <Button onClick={ModulesAction.fnSubmit} style={{ marginBottom: 20 }} >{this.state.c}</Button>
                <Table dataSource={dataSource} columns={ModulesConfig.columns} />
            </Card>
        );
    }
}

/** 组建的state对象 */
class State {
    public c: number = 121212121212;
}

/** 组建的props接口 */
interface IProps extends ReduxStatePart, IPropsBasic {
}

/** 全局状态片段对象 */
class ReduxStatePart {

    /** 用户的token */
    public token: string;

    /* 模块状态数据 */
    public modulesState: ModulesState;

    public temporary

    constructor(state: ReduxState) {
        this.token = state.user.token;
    }
}

export default connect(ReduxStatePart)(Home)