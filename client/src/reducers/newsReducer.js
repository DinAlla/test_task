import {newsDispatchTypes} from '../constants/dispatchTypes';

const initialState = [];

const newReducer = (state = initialState, action) => {
    if (action.type === newsDispatchTypes.SET_NEWS_DATA) {
        return action.news;
    }
    return state;
};

export default newReducer;