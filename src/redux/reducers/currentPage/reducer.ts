import { createReducer } from 'redux-act';
import ActionTypes from './ActionTypes';

const reducer = createReducer(
    {
        [ActionTypes.fnSetData as any]:(state, payload) => {
            return {
                ...state,
                ...payload
            }
        },
    },
    {}
);

export default reducer;