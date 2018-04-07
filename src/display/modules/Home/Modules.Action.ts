import ActionBasic from 'src/frame/page/ActionBasic';
import HomeState from './Modules.State';

class HomeAction extends ActionBasic<HomeState>{

    /** 发送消息 */
    public fnSubmit = ():void=>{
        this.rootState.a++;
        this.setRootState(this.rootState);
    }
}

export default new HomeAction();