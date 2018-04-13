import { createStore, combineReducers, Store } from 'redux';
import { EmptyActionCreator } from 'redux-act';
import ReduxState from '../ReduxState';

export default class MyStore {

    /** 当前实例 */
    private static _instance: MyStore;

    /** 获取当前实例 */
    public static get instance(): MyStore {
        if (!MyStore._instance) {
            MyStore._instance = new MyStore();
        }
        return MyStore._instance;
    }

    /** redux的跟 */
    private _store: Store<ReduxState>;

    /** 构造函数 */
    constructor() {
        if (MyStore._instance) {
            throw ('[redux.Store]对象为单利');
        } else {
            this.initialization();
        }
    }

    /** 结构根部 */
    public get store(): Store<ReduxState> {
        return this._store;
    }

    /**
     * 发起一个动作
     * @param type 动作类型
     * @param  value 动作数据
     * @param callBack 动作完成后回掉
     */
    public dispatch = (type: EmptyActionCreator, value: any, callBack?: () => void) => {
        const unsubscribe = this._store.subscribe(() => {
            unsubscribe();
            if (typeof callBack === 'function') {
                callBack();
            }
        });
        this._store.dispatch(type.call(this, value));
    }

    /**
     * 返回应用当前的 state 树
     */
    public getState(): ReduxState {
        return this._store.getState();
    }

    /**
     * 初始化对象
     */
    private initialization = (): void => {
        this._store = createStore(
            combineReducers<ReduxState>(new ReduxState() as any),
            window['$$_kxl_env'].NODE_ENV !== 'production' && window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
        );
    }
}