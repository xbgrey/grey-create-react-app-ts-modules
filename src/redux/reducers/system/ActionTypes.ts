import { createAction } from 'redux-act';

const ActionTypes = {
    
    //添加加载接口
    addLoading:createAction("$$/system/addLoading"),

    //删除加载接口
    removeLoading:createAction("$$/system/addLoading"),
};

export default ActionTypes;