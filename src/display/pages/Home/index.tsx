import * as React from 'react';
import Button from 'antd/lib/button';
import PageBasic from 'src/frame/page/PageBasic';
import IPropsBasic from 'src/frame/page/IPropsBasic'
import RootState from './RootState';
import Action from './Action';
import ReduxState from 'src/redux/ReduxState';
import { connect } from 'src/redux';
import './index.scss';

class Home extends PageBasic<RootState, IProps> {

    /**
     * 组建状态
     */
    state:State = new State();

    /**
     * 动作对象
     */
    private action:Action = new Action();

    /**
     * 构造函数
     */
    constructor(props:IProps) {
        super(props);
        this.setInitRootState(new RootState());
    }

    render() {
        return (
            <div className="App">
                <Button onClick={this.action.fnSubmit} >{this.rootState.a}</Button>
                <Button >{this.props.token}</Button>
                <Button >{this.state.c}</Button>
            </div>
        );
    }
}

/** 组建的state对象 */
class State{
    public c:number=121212121212;
}

/** 组建的props接口 */
interface IProps extends ReduxStatePart,IPropsBasic{
}

/**
 * 全局状态片段对象
 */
class ReduxStatePart{

    /** 用户的token */
    public token:string;

    constructor(state:ReduxState) {
        this.token = state.user.token;
    }
}

export default connect(ReduxStatePart)(Home)