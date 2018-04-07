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
     * @param callBack 设置完成后回掉
     */
    protected setInitRootState=(rootState:RootState, callBack?:()=>void)=>{
        MyStore.instance.dispatch(reducers.currentPage.ActionTypes.fnSetData, rootState, callBack);
    };

    /**
     * 当前页面的状态
     * */
    protected get rootState(): RootState {
        return MyStore.instance.getState().currentPage;
    }
}
