import { connect } from 'react-redux';
import { ReduxState } from 'src/redux';
import { Form } from 'antd';

/**
 * 绑定组件
 * @param reduxStatePart 一个返回全局对象片段的方法
 * @param isForm 是否关联 Form
 */
function connectIndex(reduxStatePart: (state: ReduxState) => any, isForm: boolean = false) {
    const s2p = (state: any) => {
        return {
            ...
            reduxStatePart(state)
        };
    };
    return (dom): any => {
        if (isForm) {
            return connect(s2p)(Form.create()(dom));
        } else {
            return connect(s2p)(dom);
        }
    };
}

export default connectIndex;