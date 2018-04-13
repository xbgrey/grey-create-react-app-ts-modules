import * as React from 'react';
import { Card, Menu } from 'antd';
import { Link, Switch } from 'react-router-dom';
import { ModulesBasic, IPropsBasic } from 'src/frame/modules';
import { connect, ReduxState } from 'src/redux';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import ModulesState from './Modules.State';
import ModulesAction from './Modules.Action';
import { Route } from 'src/routes';

const css = require('./index.scss');

Route.addNode(
    Route.ROOT_NAME,
    { nodeName: 'page1', path: '/page1', component: Page1 },
    { nodeName: 'page2', path: '/page2', component: Page2 },
    { nodeName: 'page3', path: '/page3', component: Page3 },
    { nodeName: 'page4', path: '/page4', component: Page4 },
    { nodeName: 'page5', path: '/page5', component: Page5 },
    { nodeName: 'page6', path: '/page6', component: Page6 },
    { nodeName: 'page7', path: '/page7', component: Page7 },
    { nodeName: 'page8', path: '/page8', component: Page8 },
);

class Home extends ModulesBasic<IProps, ModulesState> {

    /** 组建状态 */
    public state: ModulesState = new ModulesState();

    /** 构造函数 */
    constructor(props: IProps) {
        super(props, ModulesAction);
    }

    render() {
        return (
            <Card title="测试" className={css.App + ' App22'} style={{ width: 800, margin: '20px auto' }} >
                <Menu mode="horizontal">
                    <Menu.Item key='Pag1'><a onClick={() => {
                    }} >Pag1</a></Menu.Item>
                    <Menu.Item key='Pag2'><Link to='/page2'>Pag2</Link></Menu.Item>
                    <Menu.Item key='Pag3'><Link to='/page3'>Pag3</Link></Menu.Item>
                    <Menu.Item key='Pag4'><Link to='/page4'>Pag4</Link></Menu.Item>
                    <Menu.Item key='Pag5'><Link to='/page5'>Pag5</Link></Menu.Item>
                    <Menu.Item key='Pag6'><Link to='/page6'>Pag6</Link></Menu.Item>
                    <Menu.Item key='Pag7'><Link to='/page7'>Pag7</Link></Menu.Item>
                    <Menu.Item key='Pag8'><Link to='/page8'>Pag8</Link></Menu.Item>
                </Menu>
                <Switch>{Route.getChildReact(Route.ROOT_NAME, '/page1')}</Switch>
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
})(Home);