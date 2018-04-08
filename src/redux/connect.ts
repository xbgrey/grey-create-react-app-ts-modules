import { connect } from 'react-redux';

function connectIndex(ReduxStatePart:any){
    const s2p = (state: any) => {
        return {
            ...
            new ReduxStatePart(state)
        };
    }
    return connect(s2p);
}

export default connectIndex;