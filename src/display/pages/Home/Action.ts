import ActionBasic from 'src/frame/page/ActionBasic';
import RootState from './RootState';

export default class ActionHome extends ActionBasic<RootState>{

    /** 发送消息 */
    public fnSubmit = ():void=>{
        this.rootState.a++;
        this.setRootState(this.rootState);
    }
}