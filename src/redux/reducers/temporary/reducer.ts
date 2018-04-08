import { createReducer } from 'redux-act';
import ActionTypes from './ActionTypes';

const reducer = createReducer(
    {
        [ActionTypes.fnUpdate as any]: (state, payload) => {
            return { ...payload }
        },
    },
    {
    }
);

export default reducer;