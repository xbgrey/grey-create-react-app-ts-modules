import * as React from 'react';
import { Card, Menu } from 'antd';
import { Link, Switch } from 'react-router-dom';
import { ChildReact, Route } from 'src/routes';
import { ModulesBasic, IPropsBasic } from 'src/frame/modules';
import { connect, ReduxState } from 'src/redux';
import ModulesState from './Modules.State';
import ModulesAction from './Modules.Action';
import ModulesConfig from './Modules.Config';

const css = require('./index.scss');

Route.addNode(ModulesConfig.ROUTE_PARENT_NAME,
    { nodeName: 'page4.ui1', path: "*ui1", component: require('./UI.Components1').default },
    { nodeName: 'page4.ui2', path: "*ui2", component: require('./UI.Components2').default },
    { nodeName: 'page4.ui3', path: "*ui3", component: require('./UI.Components3').default },
    { nodeName: 'page4.ui4', path: "*ui4", component: require('./UI.Components4').default },
    { nodeName: 'page4.ui5', path: "*ui5", component: require('./UI.Components5').default },
    { nodeName: 'page4.ui6', path: "*ui6", component: require('./UI.Components6').default },
    { nodeName: 'page4.ui7', path: "*ui7", component: require('./UI.Components7').default },
    { nodeName: 'page4.ui8', path: "*ui8", component: require('./UI.Components8').default },
)

class Page4 extends ModulesBasic<IProps, ModulesState> {

    /** 组建状态 */
    public state: ModulesState = new ModulesState();

    /** 构造函数 */
    constructor(props: IProps) {
        super(props, ModulesAction);
    }

    render() {
        const { match } = this.props;
        return (
            <Card title="Page4" className={css.App} style={{ width: 800, margin: '20px auto' }} >
                <Menu mode="horizontal">
                    <Menu.Item key='Pag1'><Link to={`${match.url}/ui1`}>ui1</Link></Menu.Item>
                    <Menu.Item key='Pag2'><Link to={`${match.url}/ui2`}>ui2</Link></Menu.Item>
                    <Menu.Item key='Pag3'><Link to={`${match.url}/ui3`}>ui3</Link></Menu.Item>
                    <Menu.Item key='Pag4'><Link to={`${match.url}/ui4`}>ui4</Link></Menu.Item>
                    <Menu.Item key='Pag5'><Link to={`${match.url}/ui5`}>ui5</Link></Menu.Item>
                    <Menu.Item key='Pag6'><Link to={`${match.url}/ui6`}>ui6</Link></Menu.Item>
                    <Menu.Item key='Pag7'><Link to={`${match.url}/ui7`}>ui7</Link></Menu.Item>
                    <Menu.Item key='Pag8'><Link to={`${match.url}/ui8`}>ui8</Link></Menu.Item>
                </Menu>
                <Switch>
                    <ChildReact name={ModulesConfig.ROUTE_PARENT_NAME} index={`${match.url}/ui1`} />
                </Switch>
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