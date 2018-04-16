import { ActionBasic } from 'kts-scaffold-framework/modules';
import ModulesState from './Modules.State';

console.log(ActionBasic, ModulesState);

class ModulesAction extends ActionBasic<ModulesState> {

}

export default new ModulesAction();