import { SET_TOOLS_INFO } from "../Constants/Constants"

export const setTools = (info) => {
    return {
        type: SET_TOOLS_INFO,
        payload:info
    }
}