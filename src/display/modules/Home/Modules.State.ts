import ModulesStateBasic from 'kts-scaffold-framework/modules/ModulesStateBasic';
import Node1 from './Modules.State.Node1';

/** 模块状态 */
export default class ModulesState extends ModulesStateBasic {
    
    /** 节点1 */
    public node1: Node1 = new Node1();
}