import { ActionBasic } from 'src/frame/modules';
import ComponentBasic from 'src/frame/component/ComponentBasic';


/** UI基础类 */
export default abstract class UIBasic<P, ModulesState, S= {}> extends ComponentBasic<P, S> {
    
    private _action: ActionBasic<ModulesState>;

    constructor(props: P, action: ActionBasic<ModulesState>) {
        super(props);
        this._action = action;
    }

    /** 动作对象 */
    protected get action(): ActionBasic<ModulesState> {
        return this._action;
    }

    /** 当前页面的状态 */
    protected rootState(): ModulesState {
        return null;
    }
}