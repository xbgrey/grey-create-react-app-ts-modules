import { createReducer } from 'redux-act';
import ActionTypes from './ActionTypes';
const reducer = createReducer(
    {
        [ActionTypes.updateNode as any]: (state: Node, payload) => {
            return payload;
        },
    },
    {}
);
export default reducer;