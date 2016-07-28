/**
 * Created by chi on 7/28/16.
 */
import { combineReducers } from 'redux';
import {
    SELECT_REDDIT, INVALIDATE_REDDIT, RECEIVE_POSTS, REQUEST_POSTS
} from '../actions';

const selectedReddit = (state = 'reactjs', action) => {
    switch(action.type){
        case SELECT_REDDIT:
            return action.reddit;
        default:
            return state;
    }
};

const initialPostsState = {
    isFetching: false,
    didInvalidate: false,
    items: []
};

const posts = (state=initialPostsState, action) => {
    switch (action.type){
        case INVALIDATE_REDDIT:
            return Object.assign(
                {},
                state,
                {
                    isFetching: true,
                    didInvalidate: true
                }
            );
        case REQUEST_POSTS:
            return Object.assign(
                {},
                state,
                {
                    isFetching: false,
                    didInvalidate: false,
                    items: action.posts,
                    lastUpdated: action.receivedAt
                }
            );
        default:
            return state;
    }
};

const postsByReddit = ( state={}, action )=>{
    switch (action.type){
        case INVALIDATE_REDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign(
                {},
                state,
                {
                    [action.reddit]:posts(state[action.reddit], action)
                }
            );
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    postsByReddit,
    selectedReddit
});

export default rootReducer;