import { MyStore } from 'src/redux';
import ComponentBasic from 'src/frame/component/ComponentBasic';

/** UI基础类 */
export default abstract class UIBasic<RootState, P={},S={}> extends ComponentBasic<P,S>{

    /**
     * 当前页面的状态
     * */
    protected rootState(): RootState {
        return MyStore.instance.getState().currentPage;
    }
}