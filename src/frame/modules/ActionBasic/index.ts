import { MyStore } from 'src/redux';
import { EmptyActionCreator } from 'redux-act';
import { ModulesBasic } from 'src/frame/modules';

/**
 * RootState 页面跟的的类型
 */
export default abstract class ActionBasic<ModulesState>{

    /** 模块跟对象 */
    private modules:ModulesBasic<any, ModulesState>;

    /** 模块状态 */
    private _modulesState:ModulesState;

    /**
     * 构造函数
     */
    constructor() {
    }

    /** 设置跟模块（不对外） */
    public setMdules=(modules:ModulesBasic<any, ModulesState>)=>{
        this.modules = modules;  
    };

    /**
     * 设置当前模块的状态
     * @param {*} state 状态
     * @param {Function} callBack 设置完成后的回掉
     */
    protected setModulesState = (state: ModulesState, callBack?:()=>{}) => {
        this._modulesState = state;
        this.modules.setState(state, callBack);
    };

    /** 当前模块的状态 */
    protected get modulesState(): ModulesState {
        if(!this._modulesState){
            this._modulesState = JSON.parse(JSON.stringify(this.modules.state));
        }
        return this._modulesState;
    }

    /**
     * 获取动作代理
     * @param type 动作类型
     * @returns 返回的一个代理方法
     */
    protected getDispatchProxy(type: EmptyActionCreator): (state: any, callBack?:()=>{}) => void {
        return (state: any, callBack:()=>{}) => {
            MyStore.instance.dispatch(type, state, callBack);
        }
    }
}