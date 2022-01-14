import { REQUEST_STATUS } from "../../utils/constants"
import { NEWS_ERROR, NEWS_REQUEST, NEWS_SUCCESS } from "./actions"

export const initialState = {
    news: [],
    request: REQUEST_STATUS.IDLE,
    error: '',
}

export const newsReduser = (state = initialState, action) => {
    switch (action.type) {
        case NEWS_REQUEST:
            return {
                ...state,
                request: REQUEST_STATUS.PENDING,
            }
        case NEWS_SUCCESS:
            return {
                ...state,
                request: REQUEST_STATUS.SUCCESS,
                news: action.payload,
                error: '',
            }
        case NEWS_ERROR:
            return {
                ...state,
                request: REQUEST_STATUS.FAILURE,
                error: action.payload,
            }
        default: return state;
    };
};