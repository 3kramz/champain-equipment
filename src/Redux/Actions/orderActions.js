import {SET_ORDER_INFO} from '../Constants/Constants';

export const setOrderInfo = (info) => {

    if (info) {
        return {
            type: SET_ORDER_INFO,
            payload: info
        }
    }
    else {
        return {
            type: SET_ORDER_INFO,
            payload: {}
        }
    }
}