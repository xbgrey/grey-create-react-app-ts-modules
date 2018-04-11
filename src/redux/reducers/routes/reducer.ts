import { createReducer } from 'redux-act';
import ActionTypes from './ActionTypes';

const reducer = createReducer(
    {
        [ActionTypes.addNode as any]:(state:Node, url:string) => {
            return state;
        },

        [ActionTypes.removeNode as any]:(state:Node, url:string) => {
            return state;
        },
    },
    {}
);

export default reducer;