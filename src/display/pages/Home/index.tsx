import * as React from 'react';
import Button from 'antd/lib/button';
import Table from 'antd/lib/table';
import Card from 'antd/lib/card';
import PageBasic from 'src/frame/page/PageBasic';
import IPropsBasic from 'src/frame/page/IPropsBasic'
import ReduxState from 'src/redux/ReduxState';
import { connect } from 'src/redux';
import HomeState from './Home.State';
import HomeAction from './Home.Action';
import HomeConfig from './Home.Config';
import UIDemo from './UI.Demo';
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

class Home extends PageBasic<HomeState, IProps> {

    /**
     * 组建状态
     */
    state: State = new State();

    /**
     * 构造函数
     */
    constructor(props: IProps) {
        super(props);
        this.setInitRootState(new HomeState());
    }

    render() {
        return (
            <Card title="测试" className="App" style={{width:800,margin:'20px auto'}} >
                <Button onClick={HomeAction.fnSubmit} >{this.rootState.a}</Button>
                <Button onClick={HomeAction.fnSubmit} >{this.props.token}</Button>
                <Button onClick={HomeAction.fnSubmit} style={{marginBottom:20}} >{this.state.c}</Button>
                <Table dataSource={dataSource} columns={HomeConfig.columns} />
                <UIDemo/>
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

/**
 * 全局状态片段对象
 */
class ReduxStatePart {

    /** 用户的token */
    public token: string;

    constructor(state: ReduxState) {
        this.token = state.user.token;
    }
}

export default connect(ReduxStatePart)(Home)