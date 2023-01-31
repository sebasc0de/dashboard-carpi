import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';

// reducer import
import customizationReducer from './customizationReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    auth: authReducer,
    customization: customizationReducer
});

export default reducer;
