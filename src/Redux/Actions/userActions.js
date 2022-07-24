import { SET_USER_INFO, SET_USER_ROLE, remove_USER_ROLE } from "../Constants/Constants"

export const setUserInfo = (userInfo) => {
    return {
        type: SET_USER_INFO,
        payload:userInfo
    }
}

export const setUserRole = (role) => {
    return {
        type: SET_USER_ROLE,
        payload:role
    }
}

export const removeUserRole = () => {
    return {
        type: remove_USER_ROLE,
        payload:{}
    }
}