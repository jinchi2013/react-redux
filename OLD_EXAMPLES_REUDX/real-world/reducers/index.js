/**
 * Created by chi on 8/4/16.
 */
import * as ActionTypes from '../actions';
import paginate from './paginate';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

//Updates an entity cache in response to any action with response.entities
function entities ( state= { users: {}, repos: {} }, action){
    if( action.response && action.response.entities ){
        return Object.assign(
            {},
            state,
            action.response.entities
        );
    }

    return state;
}

//Updates error message to notify about the failed fetches.
function errorMessage(state = null, action){
    if( action.type === ActionTypes.RESET_ERROR_MESSAGE ){
        return null;
    } else if (action.error){
        return action.error;
    }
    return state;
}
//Updates the pagination data for different actions.
const pagination = combineReducers(
    {
        starredByUser : paginate(
            {
                mapActionToKey : action => action.login,
                types: [
                    ActionTypes.STARRED_REQUEST,
                    ActionTypes.STARRED_SUCCESS,
                    ActionTypes.STARRED_FAILURE
                ]
            }
        ),
        stargazersByRepo: paginate(
            {
                mapActionToKey: action => action.fullName,
                types: [
                    ActionTypes.STARGAZERS_REQUEST,
                    ActionTypes.STARGAZERS_SUCCESS,
                    ActionTypes.STARGAZERS_FAILURE
                ]
            }
        )
    }
);

const rootReducer = combineReducers({
    entities,
    pagination,
    errorMessage,
    routing
});

export default rootReducer;