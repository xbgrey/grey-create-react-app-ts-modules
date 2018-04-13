import { ActionBasic } from 'src/frame/modules';
import ModulesState from './Modules.State';

class ModulesAction extends ActionBasic<ModulesState> {
    
    public fn(){
        this.modulesState.a
        
    }
}

export default new ModulesAction();