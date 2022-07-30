import { SET_TOOLS_INFO } from "../Constants/Constants";

export const toolsReducer = (state =[], { type, payload }) => {
    switch (type) {
        case SET_TOOLS_INFO:
            return payload
        default:
            return state;
    }
}
