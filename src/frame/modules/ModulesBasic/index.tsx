import ComponentBasic from 'src/frame/component/ComponentBasic';
import { TemporaryNode } from 'src/redux';


/** 页面基础类 */
export default abstract class PageBasic<ModulesState, P, S={}> extends ComponentBasic<P, S>{
    
    /** 临时节点的名称 */
    private temporaryName:string;

    /** 临时节点 */
    private temporaryNode:TemporaryNode<ModulesState>;

    /** 模块跟数据 */
    private modulesState:ModulesState;

    /** 构造函数 */
    constructor(props:P, temporaryName:string, modulesState:ModulesState) {
        super(props);
        this.temporaryName = temporaryName;
        this.modulesState = modulesState;
    }

    /** 生命周期（在渲染前调用） */
    componentWillMount(){
        this.temporaryNode = new TemporaryNode(this.temporaryName);
        this.temporaryNode.upDate(this.modulesState);
    }

    /** 生命周期（组件从 DOM 中移除） */
    componentWillUnmount(){
        this.temporaryNode.distinct();
        this.temporaryNode = null;
    }
}
