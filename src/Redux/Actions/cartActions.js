import { SET_CART_INFO } from "../Constants/Constants"

export const setCart = (info) => {
    return {
        type: SET_CART_INFO,
        payload:info
    }
}