import { createReducer } from 'redux-act';
import ActionTypes from './ActionTypes';
import Node from './Node';

const reducer = createReducer(
    {
        [ActionTypes.addLoading as any]:(state:Node, url:string) => {
            const loading = state.loading.slice();
            loading.push(url);
            return {
                ...state,
                loading:loading
            }
        },

        [ActionTypes.removeLoading as any]:(state:Node, url:string) => {
            const loading = state.loading.slice();
            for(let i=0; i<loading.length; i++){
                if(loading[i] === url){
                    loading.splice(i,1);
                    break;
                }
            }
            return {
                ...state,
                loading:loading
            }
        },
    },
    new Node()
);

export default reducer;