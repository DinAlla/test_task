import {newsDispatchTypes} from '../constants/dispatchTypes';

export const setAllNewsData = news => ({
    type: newsDispatchTypes.SET_NEWS_DATA,
    news
});