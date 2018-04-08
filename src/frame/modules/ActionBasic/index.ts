import { MyStore } from 'src/redux';
import { EmptyActionCreator } from 'redux-act';
import { TemporaryNode } from 'src/redux';

/**
 * RootState 页面跟的的类型
 */
export default abstract class ActionBasic<ModulesState>{

    /** 临时节点 */
    private temporaryNode:TemporaryNode<ModulesState>;

    /**
     * 构造函数
     * @param temporaryName '临时节点名称'
     */
    constructor(temporaryName:string) {
        this.temporaryNode = new TemporaryNode<ModulesState>(temporaryName)
    }

    /**
     * 设置当前页面的状态
     * @param {*} state 状态
     * @param {Function} callBack 设置完成后的回掉
     */
    protected setModulesState = (state: ModulesState, callBack?:()=>{}) => {
        this.temporaryNode.upDate(state, callBack);
    };

    /** 当前页面的状态 */
    protected getModulesState(): ModulesState {
        return this.temporaryNode.getState();
    }

    /**
     * 获取动作代理
     * @param type 动作类型
     * @returns 返回的一个代理方法
     */
    protected getDispatchProxy(type: EmptyActionCreator): (state: ModulesState, callBack:()=>{}) => void {
        return (state: ModulesState, callBack:()=>{}) => {
            MyStore.instance.dispatch(type, state, callBack);
        }
    }
}