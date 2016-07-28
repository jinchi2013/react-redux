/**
 * Created by chi on 7/28/16.
 */
import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';

export const selectReddit = (reddit)=>{
    return {
        type: SELECT_REDDIT,
        reddit
    };
};

export const invalidateReddit = (reddit)=>{
    return {
        type: INVALIDATE_REDDIT,
        reddit
    };
};

const requestPosts = (reddit) => {
    return {
        type: REQUEST_POSTS,
        reddit
    }
};

const receivePosts = (reddit, json) => {
    return {
        type: RECEIVE_POSTS,
        reddit,
        posts: json.data.children.map( (child) => { return child.data } ),
        receivedAt: Date.now()
    };
};

const fetchPosts = (reddit)=>{
    return dispatch => {
        dispatch(requestPosts(reddit));
        return fetch(`https://www.reddit.com/r/${reddit}.json`).then(
            (response) => {
                response.json()
            }
        ).then(
            (json) => {
                dispatch(receivePosts(reddit, json))
            }
        );
    };
};

const shouldFetchPosts = (state, reddit)=>{
    const posts = state.postsByReddit[reddit];
    if( !posts ){
        return true;
    }
    if( posts.isFetching ){
        return false
    }
    return posts.didInvalidate;
};

export const fetchPostsIfNeeded = (reddit)=>{
    return (dispatch, getState) => {
        if(shouldFetchPosts(getState(), reddit)){
            return dispatch(fetchPosts(reddit))
        }
    }
};