import { SET_CART_INFO } from "../Constants/Constants";

export const cartReducer = (state =[], { type, payload }) => {
    switch (type) {
        case SET_CART_INFO:
            return payload
        default:
            return state;
    }
}

