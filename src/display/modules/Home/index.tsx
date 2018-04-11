import * as React from 'react';
import { Card, Menu } from 'antd';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
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

const red = [
    <Route key={1} path="*page1" component={Page1} />,
    <Route key={2} path="*page2" component={Page2} />,
    <Route key={3} path="*page3" component={Page3} />,
    <Route key={4} path="*page4" component={Page4} />,
    <Route key={5} path="*page5" component={Page5} />,
    <Route key={6} path="*page6" component={Page6} />,
    <Route key={7} path="*page7" component={Page7} />,
    <Route key={8} path="*page8" component={Page8} />,
    <Route key={9} render={() => <Redirect to="/page1" />} />
];

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
                    <Menu.Item key='Pag1'><a onClick={()=>{
                        history 
                    }} >Pag1</a></Menu.Item>
                    <Menu.Item key='Pag2'><Link to='/page2'>Pag2</Link></Menu.Item>
                    <Menu.Item key='Pag3'><Link to='/page3'>Pag3</Link></Menu.Item>
                    <Menu.Item key='Pag4'><Link to='/page4'>Pag4</Link></Menu.Item>
                    <Menu.Item key='Pag5'><Link to='/page5'>Pag5</Link></Menu.Item>
                    <Menu.Item key='Pag6'><Link to='/page6'>Pag6</Link></Menu.Item>
                    <Menu.Item key='Pag7'><Link to='/page7'>Pag7</Link></Menu.Item>
                    <Menu.Item key='Pag8'><Link to='/page8'>Pag8</Link></Menu.Item>
                </Menu>
                <div>
                <Switch>
                    {red.map(value => (value))}
                </Switch>  
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