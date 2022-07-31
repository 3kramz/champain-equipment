import { SET_USER_INFO, SET_USER_ROLE,remove_USER_ROLE, SET_ALL_USER } from "../Constants/Constants";

export const userInfoReducer = (state =[], { type, payload }) => {
    switch (type) {
        case SET_USER_INFO:
            return payload
        default:
            return state;
    }
}
export const allUsersReducer = (state =[], { type, payload }) => {
    switch (type) {
        case SET_ALL_USER:
            return payload
        default:
            return state;
    }
}

export const userRoleReducer = (state =[], { type, payload }) => {
    
    switch (type) {

        case SET_USER_ROLE:
            return payload

        case remove_USER_ROLE:
            return payload

        default:
            return state;
    }
    
}

