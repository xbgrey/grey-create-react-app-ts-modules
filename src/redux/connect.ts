import { connect } from 'react-redux';

export default function (indexS2P: (state: any) => any) {
    const s2p = (state: any) => {
        let ret: any = indexS2P(state);
        ret.currentPage = state.currentPage;
        return ret;
    };
    return connect(s2p);
}