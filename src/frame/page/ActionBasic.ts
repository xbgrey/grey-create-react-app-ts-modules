import { MyStore, reducers } from 'src/redux';
import { EmptyActionCreator } from 'redux-act';

/**
 * RootState 页面跟的的类型
 */
export default class ActionBasic<RootState>{

    /**
     * 设置当前页面的状态
     * @param {*} state 状态
     * @param {Function} callBack 设置完成后的回掉
     */
    protected setRootState = (state: RootState) => {
        MyStore.instance.dispatch(reducers.currentPage.ActionTypes.fnSetData, state);
    };

    /**
     * 当前页面的状态
     * */
    protected get rootState(): RootState {
        return MyStore.instance.getState().currentPage;
    }

    /**
     * 获取动作代理
     * @param type 动作类型
     * @returns 返回的一个代理方法
     */
    protected getDispatchProxy(type: EmptyActionCreator): (state: RootState) => void {
        return (state: RootState) => {
            MyStore.instance.dispatch(type, state);
        }
    }
}