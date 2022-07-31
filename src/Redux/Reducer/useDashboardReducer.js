import { SET_USER_BILLING_INFO, SET_USER_SHIPPING_INFO, SET_ORDER_INFO } from "../Constants/Constants";
const initialState = {
    lane: "N/A",
    area: "N/A",
    city: "N/A",
    State: "N/A",
    phone: "N/A",
    country: "N/A"
}
export const userBillingInfoReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_USER_BILLING_INFO:
            return payload
        default:
            return state;
    }
}
export const userShipingInfoReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_USER_SHIPPING_INFO:
            return payload
        default:
            return state;
    }
}

export const orderInfoReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_ORDER_INFO:
            return payload
        default:
            return state;
    }
}
