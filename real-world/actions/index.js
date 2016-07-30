import { CALL_API, Schemas } from '../middleware/api';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

// Fetches a single user from Github API
// Relies on the custom API middleware defined in ../middleware/api.js
const fetchUser = (login) => {
    return{
        [CALL_API]: {
            types: [ USER_REQUEST, USER_SUCCESS, USER_FAILURE ],
            endpoint: `users/${login}`,
            schema: Schemas.USER
        }
    }
};
// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware
export const loadUser = (login, requiredFields = [])=>{
    return (dispatch, getState)=>{
        const user = getState().entities.users[login];
        if( user && requiredFields.every(key=>user.hasOwnProperty(key)) ){
            return null;
        }
        return dispatch(fetchUser(login));
    };
};
export const REPO_REQUEST = 'REPO_REQUEST';
export const REPO_SUCCESS = 'REPO_SUCCESS';
export const REPO_FAILURE = 'REPO_FAILURE';

// Fetches a single repository from github API
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchRepo = (fullName)=>{
    return{
        [CALL_API]:{
            types:[ REPO_REQUEST, REPO_SUCCESS, REPO_FAILURE ],
            endpoint: `repo/${fullName}`,
            schema: Schemas.REPO
        }
    };
};

// Fetches a single repository from Github API unless it is cached
// Relies on Redux Thunk middleware
export const loadRepo = (fullName, requiredFields=[]) => {
    return (dispatch, getState)=> {
        const repo = getState().entities.repos[fullName];
        if( repo && requiredFields.every(key => repo.hasOwnProperty(key)) ){
            return null;
        }
        return dispatch(fetchRepo(fullName));
    }
};