import { ActionBasic } from 'src/frame/modules';
import { reducers, MyStore } from 'src/redux';
import ModulesConfig from './Modules.Config';
import HomeState from './Modules.State';

class HomeAction extends ActionBasic<HomeState>{

    /** 发送消息 */
    public fnSubmit = ():void=>{
        const modulesState = this.getModulesState();

        modulesState.a++;
        this.setModulesState(modulesState);

        const user = MyStore.instance.getState().user;
        user.token = Math.random().toString();
        MyStore.instance.dispatch(reducers.user.ActionTypes.fnSetUserInfo, user);
    }
}

export default new HomeAction(ModulesConfig.TEMPORARY_NAME);