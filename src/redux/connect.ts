import { connect } from 'react-redux';
import { ReduxState } from 'src/redux';

function connectIndex(reduxStatePart: (state: ReduxState) => any) {
    const s2p = (state: any) => {
        return {
            ...
            reduxStatePart(state)
        };
    };
    return (dom): any => { return connect(s2p)(dom); };
}

export default connectIndex;