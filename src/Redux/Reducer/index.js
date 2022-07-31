import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { toolsReducer } from './toolsReducer';
import { userBillingInfoReducer, userShipingInfoReducer, orderInfoReducer, allOrderInfoReducer } from './useDashboardReducer';
import { userInfoReducer, userRoleReducer } from './userReducer';

export const reducer = combineReducers({
    user: userInfoReducer,
    role: userRoleReducer,
    billing: userBillingInfoReducer,
    shipping: userShipingInfoReducer,
    tools:toolsReducer,
    cart: cartReducer,
    order: orderInfoReducer,
    allOrder: allOrderInfoReducer,
});
