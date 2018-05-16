import { ActionBasic } from 'kts-scaffold-framework/modules';
import ModulesState from './Modules.State';

class ModulesAction extends ActionBasic<ModulesState> {

    public setText = (value: string) => {
        this.modulesState.node1.text = value;
        this.setModulesState(this.modulesState);
    }
}

export default new ModulesAction();