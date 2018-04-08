import { TemporaryNode } from 'src/redux';
import ComponentBasic from 'src/frame/component/ComponentBasic';
/** UI基础类 */
export default abstract class UIBasic<RootState, P={},S={}> extends ComponentBasic<P,S>{

    /** 临时节点的名称 */
    private temporaryName:string;

    /** 临时节点 */
    private temporaryNode:TemporaryNode<RootState>;

    constructor(props:P, temporaryName:string){
        super(props);
        this.temporaryName = temporaryName;
    }

    /** 生命周期（在渲染前调用） */
    componentWillMount(){
        this.temporaryNode = new TemporaryNode(this.temporaryName);
    }

    /** 当前页面的状态 */
    protected rootState(): RootState {
        return this.temporaryNode.getState();
    }
}