import * as React from 'react';
import { ModulesBasic , IPropsBasic } from 'src/frame/modules';
import { connect, ReduxState, MyStore } from 'src/redux';
import ModulesState from './Modules.State';
import ModulesAction from './Modules.Action';
import ModulesConfig from './Modules.Config';

import UIComponents from './UI.Components';
import Button from 'antd/lib/button';
import Table from 'antd/lib/table';
import Card from 'antd/lib/card';

import './index.scss';

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

class Home extends ModulesBasic<IProps, ModulesState> {

    /** 组建状态 */
    public state: ModulesState = new ModulesState();

    /**
     * 构造函数
     */
    constructor(props: IProps) {
        super(props, ModulesAction);
    }
 
    render() {
        const user =  MyStore.instance.getState().user
        return (
            <Card title="测试" className='App' style={{ width: 800, margin: '20px auto' }} >
                <Button onClick={ModulesAction.fnSubmit} >{this.state.a}</Button>
                <Button onClick={ModulesAction.fnSubmit} >{user.token}</Button>
                <Button onClick={ModulesAction.fnSubmit} style={{ marginBottom: 20 }} >{this.state.b}</Button>
                <Table dataSource={dataSource} columns={ModulesConfig.columns} />
                <UIComponents/>
            </Card>
        );
    }
}

/** 组建的props接口 */
interface IProps extends IReduxStatePart, IPropsBasic {
}

/** 全局数据片段 */
interface IReduxStatePart {    
    /** 用户的token */
    token ?: string;
}

export default connect((state:ReduxState):IReduxStatePart=>{
    return {
        token: state.user.token,
    }
})(Home)