import {
  REQUEST_TOP_RATED,
  RECEIVE_TOP_RATED,
  REQUEST_FAILED
} from '../actionsConst'
import { combineReducers } from 'redux'

const initState = {
  isRequesting: false,
  json: {
    page: 0,
    results: [],
    totalPages: 0,
    totalResults: 0
  }
}

const moviesList = (state=initState, action) => {
  switch(action.type) {
    case REQUEST_TOP_RATED :
      return {
        ...state,
        isRequesting: action.isRequesting
      }
    case RECEIVE_TOP_RATED :
      return {
        ...state,
        isRequesting: action.isRequesting,
        requestFailed: action.requestFailed,
        json: action.json
      }
    case REQUEST_FAILED :
      return {
        ...state,
        err: action.err,
        isRequesting: action.isRequesting,
        requestFailed: action.requestFailed
      }
    default:
      return state
  }
}

export default combineReducers({
  moviesList
})
