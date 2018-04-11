import { createAction } from 'redux-act';

const ActionTypes = {
    
    //添加节点
    addNode:createAction("$$/routes/addNode"),

    //删除节点
    removeNode:createAction("$$/routes/removeNode"),
};

export default ActionTypes;