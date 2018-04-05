import { createStore, combineReducers, Store } from 'redux';
import ReduxState from '../ReduxState';

export default class MyStore {

    private _store: Store<ReduxState>;

    constructor() {
        if (MyStore._instance) {
            throw ('[redux.Store]对象为单利');
        } else {
            MyStore._instance = this;
            this.fnInitialization();
        }
    }

    /**
     * 结构根部
     */
    public get store(): Store<ReduxState> {
        return this._store;
    }

    /**
     * 发起一个动作
     * @param type 动作类型
     * @param  value 动作数据
     */
    public dispatch = (type: any, value: any) => {
        if (typeof type === 'function') {
            this._store.dispatch(type(value));
        }
    }

    /**
     * 返回应用当前的 state 树
     */
    public getState = (): ReduxState => {
        return this._store.getState();
    }

    /**
     * 初始化对象
     */
    private fnInitialization = (): void => {
        this._store = createStore(
            combineReducers<ReduxState>(new ReduxState() as any),
            window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
        );
    }

    // window['$$_kxl_env'].NODE_ENV!=='production' && 
    private static _instance: MyStore;

    public static get instance(): MyStore {
        if (!MyStore._instance) {
            new MyStore();
        }
        return MyStore._instance;
    }
};