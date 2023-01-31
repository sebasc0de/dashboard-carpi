// project imports
import config from 'config';

// action - state management
import * as actionTypes from './actions';

export const initialState = {
    user: undefined
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: {
                    name: 'prueba',
                    desc: 'prueba de reducer'
                }
            };

        default:
            return state;
    }
};

export default authReducer;
