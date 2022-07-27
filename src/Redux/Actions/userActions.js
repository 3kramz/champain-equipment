import { SET_USER_INFO, SET_USER_ROLE, remove_USER_ROLE, SET_USER_BILLING_INFO, SET_USER_SHIPPING_INFO } from "../Constants/Constants"

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

export const setUserBillingInfo = (info) => {
    return {
        type: SET_USER_BILLING_INFO,
        payload:info
    }
}

export const setUserShipingInfo = (info) => {
    return {
        type: SET_USER_SHIPPING_INFO,
        payload:info
    }
}