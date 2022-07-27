import { combineReducers } from 'redux';
import { userBillingInfoReducer, userShipingInfoReducer } from './useDashboardReducer';
import { userInfoReducer, userRoleReducer } from './userReducer';

export const reducer = combineReducers({
    user: userInfoReducer,
    role: userRoleReducer,
    billing: userBillingInfoReducer,
    shipping: userShipingInfoReducer
});
