import fetch from 'isomorphic-fetch';
// fetch() allows you to make network requests similar to XMLHttpRequest (XHR).
// The main difference is that the Fetch API uses Promises,
// which enables a simpler and cleaner API,
// avoiding callback hell and having to remember the complex API of XMLHttpRequest.

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';

export const selectReddit = ( reddit ) => {
    return {
        type: SELECT_REDDIT,
        reddit
    };
};

export const invalidateReddit = ( reddit ) => {
    return {
        type: INVALIDATE_REDDIT,
        reddit
    }
};

const requestPosts = ( reddit ) => {
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
    }
};

const fetchPost = ( subReddit ) => {
    return (dispatch) => {
        dispatch(requestPosts(subReddit));
        return fetch(`https://www.reddit.com/r/${subReddit}.json`).then(
                (response) => {
                    console.log(response.headers.get('Content-Type'));
                    console.log(response.headers.get('Date'));
                    console.log(response.status);
                    console.log(response.statusText);
                    console.log(response.type);
                    console.log(response.url);

                    // the response of fetch() request is s Stream object
                    // which means that when we call the json() method,
                    // a Promise is returned since the reading of the stream will happen async
                    return response.json().then(
                        (json) => {
                            console.log(json);
                            dispatch(receivePosts(subReddit, json));
                        }
                    );
                }
            )
            .catch(
                (err) => {
                    console.log('Fetch Error : -S', err);
                }
            );
    }
};

const shouldFetchPosts = ( state, reddit ) => {
    const posts = state.postsByReddit[reddit];
    if( !posts ) {
        return true;
    }
    if( posts.isFetching ) {
        return false;
    }
    return posts.didInvalidate;
};

export const fetchPostsIfNeeded = ( reddit ) => {
    return ( dispatch, getState ) => {
        if(shouldFetchPosts( getState(), reddit) ) {
            return dispatch( fetchPost(reddit) );
        }
    };
};