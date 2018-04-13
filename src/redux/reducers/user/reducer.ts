import { createReducer } from 'redux-act';
import ActionTypes from './ActionTypes';
import Node from './Node';

const reducer = createReducer(
    {
        [ActionTypes.fnSetUserInfo as any]: (state, payload) => {
            return {
                ...state,
                userInfo: payload,
            };
        },
    },
    new Node()
);

export default reducer;