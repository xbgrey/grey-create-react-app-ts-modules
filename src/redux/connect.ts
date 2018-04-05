import { connect } from 'react-redux';

function connectIndex(ReduxStatePart:any){
    const s2p = (state: any) => {
        let ret: any = new ReduxStatePart(state);
        ret.currentPage = state.currentPage;
        return ret;
    }
    return connect(s2p);
}

export default connectIndex;