import { ActionBasic } from 'src/frame/modules';
import { reducers, MyStore } from 'src/redux';
import ModulesState from './Modules.State';
import { system } from 'src/api';

class ModulesAction extends ActionBasic<ModulesState> {

    /** 发送消息 */
    public fnSubmit = async () => {

        this.modulesState.a++;
        this.setModulesState(this.modulesState);

        const user = MyStore.instance.getState().user;
        user.token = Math.random().toString();
        this.getDispatchProxy(reducers.user.ActionTypes.fnSetUserInfo)(user);

        const res = await system.webTokenLogin({ 'loginName': 'yiliang', 'password': '123456' });

        

        if (res.er) {
            console.log(res.er);
        } else {
            console.log(res.body);
        }

    }
}

export default new ModulesAction();