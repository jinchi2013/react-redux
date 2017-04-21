"use strict";
import { CALL_API, Schemas } from '../middleware/api'

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js

const fetchUser = login => ({
    [CALL_API] : {
        types: [ USER_REQUEST, USER_SUCCESS, USER_FAILURE ],
        endpoint: `users/${login}`,
        schema: Schemas.USER
    }
});

// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware
export const loadUser = (login, requiredFields = [])=>(dispatch, getState)=>{
    const user = getState().entities.user[login];
    if(user && requiredFields.every(key => user.hasOwnProperty((key)))) {
        return null;
    }

    return dispatch(fetchUser(login))
};

export const REPO_REQUEST = 'REPO_REQUEST';
export const REPO_SUCCESS = 'REPO_SUCCESS';
export const REPO_FAILURE = 'REPO_FAILURE';

// Fetches a single repository from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchRepo = fullName => ({
    [CALL_API]: {
        types: [ REPO_REQUEST, REPO_SUCCESS, REPO_FAILURE ],
        endpoint: `repos/${fullName}`,
        schema: Schemas.REPO
    }
});

export const STARRED_REQUEST = 'STARRED_REQUEST';
export const STARRED_SUCCESS = 'STARRED_SUCCESS';
export const STARRED_FAILURE = 'STARRED_FAILURE';

// Fetches a page of starred repos by a particular user.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchStarred = (login, nextPageUrl) => ({
    login,
    [CALL_API]: {
        types: [ STARRED_REQUEST, STARRED_SUCCESS, STARRED_FAILURE ],
        endpoint: nextPageUrl,
        schema: Schemas.REPO_ARRAY
    }
});