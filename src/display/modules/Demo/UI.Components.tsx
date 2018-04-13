import * as React from 'react';
import { UIBasic, IPropsBasic } from 'src/frame/modules';
import { connect, ReduxState } from 'src/redux';
import ModulesState from './Modules.State';
import ModulesAction from './Modules.Action';

class UIComponents extends UIBasic<IProps, ModulesState> {

    /** 构造函数 */
    constructor(props: IProps) {
        super(props, ModulesAction);
    }
    
    render() {
        const { } = this.props;//获取你的props数据
        return (
            <div>
                {this.props.token}
                你的组件
            </div>
        );
    }
}

/** 全局数据片段数据接口 */
interface IReduxStatePart {
    token?:string
}

/** 组建的props接口 */
interface IProps extends IReduxStatePart, IPropsBasic {
    id:string;
}

//对IReduxStatePart的实现并绑定到组件上
export default connect((state: ReduxState): IReduxStatePart => ({
    token:state.user.token
}))(UIComponents);