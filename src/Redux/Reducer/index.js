import { combineReducers } from 'redux';
import { userInfoReducer, userRoleReducer } from './userReducer';

export const reducer = combineReducers({
    user: userInfoReducer,
    role: userRoleReducer
});
