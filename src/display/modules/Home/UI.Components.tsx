import * as React from 'react';
import { UIBasic, IPropsBasic } from 'kts-scaffold-framework/modules';
import { connect } from 'src/redux';
import ReduxState, { } from 'src/redux/ReduxState';
import ModulesState from './Modules.State';
import ModulesAction from './Modules.Action';
import { FormComponentProps } from 'antd/lib/form';
import { Form, Input } from 'antd';

/** 全局数据片段数据接口 */
interface IReduxStatePart {
    
}

/** 组建的props接口 */
interface IProps extends IReduxStatePart, IPropsBasic, FormComponentProps {

}

/** 绑定全局数据到props */
@connect((state: ReduxState): IReduxStatePart => ({

}), true)
export default class UIComponents extends UIBasic<IProps, ModulesState> {

    /** 构造函数 */
    constructor(props: IProps) {
        super(props, ModulesAction);
    }
    
    render() {
        const { form } = this.props; // 获取你的props数据
        const { getFieldDecorator } = form;
        return (
            <div>
                <Form.Item>
                    {getFieldDecorator('loginName', {
                        rules: [
                            { required: true, },
                        ],
                    })(<Input size="large" placeholder="请输入用户名" />)}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [
                            { required: true, },
                        ],
                    })(<Input size="large" type="password" placeholder="请输入密码" />)}
                </Form.Item>
            </div>
        );
    }
}
 