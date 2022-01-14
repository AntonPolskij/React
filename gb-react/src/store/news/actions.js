import { API_URL } from "../../utils/constants";

export const NEWS_REQUEST = "NEWS::NEWS_REQUEST";
export const NEWS_SUCCESS = "NEWS::NEWS_SUCCESS";
export const NEWS_ERROR = "NEWS::NEWS_ERROR";


export const newsRequest = () => ({
    type: NEWS_REQUEST,
});

export const newsSuccess = (data) => ({
    type: NEWS_SUCCESS,
    payload: data,
});

export const newsError = (err) => ({
    type: NEWS_ERROR,
    payload: err,
});


export const getNews = () => (dispatch) => {
    dispatch(newsRequest());
    fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Request error ${response.status}`)
            }
            return response.json();
        })
        .then((result) => { dispatch(newsSuccess(result)) })
        .catch((err) => {
            dispatch(newsError(err.message));
        });
} 