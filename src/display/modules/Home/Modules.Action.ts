import { ActionBasic } from 'src/frame/modules';
import { reducers, MyStore } from 'src/redux';
import ModulesState from './Modules.State';

class ModulesAction extends ActionBasic<ModulesState>{

    /** 发送消息 */
    public fnSubmit = ():void=>{
        
        this.modulesState.a++;
        this.setModulesState(this.modulesState);

        const user = MyStore.instance.getState().user;
        user.token = Math.random().toString();
        this.getDispatchProxy(reducers.user.ActionTypes.fnSetUserInfo)(user);
    }
}

export default new ModulesAction();