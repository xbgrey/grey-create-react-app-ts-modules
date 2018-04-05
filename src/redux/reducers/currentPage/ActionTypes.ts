import { createAction } from 'redux-act';

const ActionTypes = {
    //设置用户数据的UserInfo
    fnSetData:createAction("$$UI/currentPage/fnSetData"),
};

export default ActionTypes;