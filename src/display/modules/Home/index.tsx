import * as React from 'react';
import { Card, Menu } from 'antd';
import { Route, Link } from 'react-router-dom';
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

const css = require('./index.scss');

class Home extends ModulesBasic<IProps, ModulesState> {

    /** 组建状态 */
    public state: ModulesState = new ModulesState();

    /** 构造函数 */
    constructor(props: IProps) {
        super(props, ModulesAction);
    }

    render() {
        return (
            <Card title="测试" className={css.App} style={{ width: 800, margin: '20px auto' }} >
                <Menu mode="horizontal">
                    <Menu.Item key='Pag1'><Link to='/page1'>Pag1</Link></Menu.Item>
                    <Menu.Item key='Pag2'><Link to='/page2'>Pag2</Link></Menu.Item>
                    <Menu.Item key='Pag3'><Link to='/page3'>Pag3</Link></Menu.Item>
                    <Menu.Item key='Pag4'><Link to='/page4'>Pag4</Link></Menu.Item>
                    <Menu.Item key='Pag5'><Link to='/page5'>Pag5</Link></Menu.Item>
                    <Menu.Item key='Pag6'><Link to='/page6'>Pag6</Link></Menu.Item>
                    <Menu.Item key='Pag7'><Link to='/page7'>Pag7</Link></Menu.Item>
                    <Menu.Item key='Pag8'><Link to='/page8'>Pag8</Link></Menu.Item>
                </Menu>
                <div>
                    <Route path="*page1" component={Page1} />
                    <Route path="*page2" component={Page2} />
                    <Route path="*page3" component={Page3} />
                    <Route path="*page4" component={Page4} />
                    <Route path="*page5" component={Page5} />
                    <Route path="*page6" component={Page6} />
                    <Route path="*page7" component={Page7} />
                    <Route path="*page8" component={Page8} />
                </div>
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