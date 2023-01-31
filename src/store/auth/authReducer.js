// project imports
import config from 'config';

// action - state management
import * as actionTypes from './actions';

export const initialState = {
    isOpen: [], // for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                isOpen: [id]
            };

        default:
            return state;
    }
};

export default authReducer;
