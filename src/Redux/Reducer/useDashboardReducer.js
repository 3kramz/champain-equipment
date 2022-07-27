import { SET_USER_BILLING_INFO } from "../Constants/Constants";
const initialState = {
    lane: "N/A",
    area: "N/A",
    city: "N/A",
    State: "N/A",
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
