import MyStore from '../MyStore';
import ActionTypes from '../reducers/temporary/ActionTypes';

export default class TemporaryNode<T>{

    private _temporaryName: string;

    /**
     * 构造函数
     * @param temporaryName 临时节点名称
     */
    constructor(temporaryName: string) {
        this._temporaryName = temporaryName;
    };

    /**
     * 更新临时节点
     * @param state 更新的数据
     * @param callBack 更新完后的回掉
     */
    public upDate = (state: T, callBack?: () => void): TemporaryNode<T> => {
        const temporary: any = MyStore.instance.getState().temporary;
        temporary[this._temporaryName] = state;
        MyStore.instance.dispatch(ActionTypes.fnUpdate, temporary, callBack);
        return this;
    };

    /**
     * 清理临时节点
     * @param callBack 更新完后的回掉s
     */
    public distinct = (callBack?: () => void): void => {
        const temporary: any = MyStore.instance.getState().temporary;
        delete temporary[this._temporaryName]
        MyStore.instance.dispatch(ActionTypes.fnUpdate, temporary, callBack);
    }

    /** 获取节点数据 */
    public getState = (): T => {
        return MyStore.instance.getState().temporary[this._temporaryName];
    };
}