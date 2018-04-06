import { MyStore, reducers } from 'src/redux';
import ComponentBasic from 'src/frame/component/ComponentBasic';

/** 页面基础类 */
export default abstract class PageBasic<RootState, P, S={}> extends ComponentBasic<P, S>{
    
    /**
     * 构造函数
     */
    constructor(props:P) {
        super(props);
    }

    /**
     * 设置页面更数据
     * @param startClass 数据对象类
     */
    protected setInitRootState=(rootState:RootState)=>{
        MyStore.instance.dispatch(reducers.currentPage.ActionTypes.fnSetData, rootState);
    };

    /**
     * 当前页面的状态
     * */
    protected get rootState(): RootState {
        return MyStore.instance.getState().currentPage;
    }
}
