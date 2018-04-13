import { connect } from 'react-redux';
import { ReduxState } from 'src/redux';

function connectIndex(reduxStatePart: (state: ReduxState) => any) {
    const s2p = (state: any) => {
        return {
            ...
            reduxStatePart(state)
        };
    };
    return connect(s2p);
}

export default connectIndex;