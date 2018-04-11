import * as React from 'react';
import { Card, Menu } from 'antd';
import { Route, Link } from 'react-router-dom';
import { ModulesBasic, IPropsBasic } from 'src/frame/modules';
import { connect, ReduxState } from 'src/redux';
import ModulesState from './Modules.State';
import ModulesAction from './Modules.Action';
import UI1 from './UI.Components1';
import UI2 from './UI.Components2';
import UI3 from './UI.Components3';
import UI4 from './UI.Components4';
import UI5 from './UI.Components5';
import UI6 from './UI.Components6';
import UI7 from './UI.Components7';
import UI8 from './UI.Components8';

const css = require('./index.scss');

class Page4 extends ModulesBasic<IProps, ModulesState> {

    /** 组建状态 */
    public state: ModulesState = new ModulesState();

    /** 构造函数 */
    constructor(props: IProps) {
        super(props, ModulesAction);
    }

    render() {
        return (
            <Card title="Page4" className={css.App} style={{ width: 800, margin: '20px auto' }} >
                <Menu mode="horizontal">
                    <Menu.Item key='Pag1'><Link to='/page4/ui1'>ui1</Link></Menu.Item>
                    <Menu.Item key='Pag2'><Link to='/page4/ui2'>ui2</Link></Menu.Item>
                    <Menu.Item key='Pag3'><Link to='/page4/ui3'>ui3</Link></Menu.Item>
                    <Menu.Item key='Pag4'><Link to='/page4/ui4'>ui4</Link></Menu.Item>
                    <Menu.Item key='Pag5'><Link to='/page4/ui5'>ui5</Link></Menu.Item>
                    <Menu.Item key='Pag6'><Link to='/page4/ui6'>ui6</Link></Menu.Item>
                    <Menu.Item key='Pag7'><Link to='/page4/ui7'>ui7</Link></Menu.Item>
                    <Menu.Item key='Pag8'><Link to='/page4/ui8'>ui8</Link></Menu.Item>
                </Menu>
                <div>
                    <Route path="*ui1" component={UI1} />
                    <Route path="*ui2" component={UI2} />
                    <Route path="*ui3" component={UI3} />
                    <Route path="*ui4" component={UI4} />
                    <Route path="*ui5" component={UI5} />
                    <Route path="*ui6" component={UI6} />
                    <Route path="*ui7" component={UI7} />
                    <Route path="*ui8" component={UI8} />
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
})(Page4);