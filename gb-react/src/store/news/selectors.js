import { REQUEST_STATUS } from "../../utils/constants";

export const newsRequest = (state) => state.news.news;
export const newsLoading = (state) => state.news.request === REQUEST_STATUS.PENDING;
export const newsError = (state) => state.news.error;