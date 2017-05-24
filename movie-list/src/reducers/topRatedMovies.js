import { combineReducers } from 'redux'
import findIndex from 'lodash/findIndex'
import * as Types from '../actionsConst'

const initState = {
  isRequesting: true,
  json: {
    page: 0,
    results: [],
    totalPages: 0,
    totalResults: 0
  }
}

const moviesList = (state=initState, action) => {
  switch(action.type) {
    case Types.REQUEST_TOP_RATED :
      return {
        ...state,
        isRequesting: action.isRequesting
      }
    case Types.RECEIVE_TOP_RATED :
      return {
        ...state,
        isRequesting: action.isRequesting,
        requestFailed: action.requestFailed,
        json: action.json
      }
    case Types.REQUEST_FAILED :
      return {
        ...state,
        err: action.err,
        isRequesting: action.isRequesting,
        requestFailed: action.requestFailed
      }
    case Types.SORT_MOVIES_ARRAY :
      return {
        ...state,
        json: {
          ...state.json,
          results: action.results
        }
      }
    case Types.ADD_LIKED_MOVIE:
    case Types.ADD_DISLIKED_MOVIE:
      const copy = state.json.results.slice(0)
      const index = findIndex(copy, ele => ele.id === action.movie.id )
      copy[index][action.buttonType] = true
      return {
        ...state,
        json: {
          ...state.json,
          results: copy
        }
      }
    default:
      return state
  }
}

const byPageNumber = (state={}, action) => {
  switch(action.type) {
    case Types.CACHE_MOVIE_RESULTS:
      return {
        ...state,
        [action.pageNumber]: {
          ...action.camelizeJson,
          results: action.camelizeJson.results.reduce((res, movie)=> {
            res[movie.id] = {...movie}
            res[movie.id].liked = false
            res[movie.id].block = false
            return res
          }, {})
        }
      }
    case Types.ADD_LIKED_MOVIE:
      return {
        ...state,
        [action.page]: {
          ...state[action.page],
          results: {
            ...state[action.page].results,
            [action.movie.id]: {
              ...state[action.page].results[action.movie.id],
              [action.buttonType]: true
            }
          }
        }
      }
    case Types.ADD_DISLIKED_MOVIE:
      const copy = {...state[action.page].results}
      delete copy[action.movie.id]
      return {
        ...state,
        [action.page]: {
          ...state[action.page],
          results: copy
        }
      }

      return {...state}
    default:
      return state
  }
}

export default combineReducers({
  moviesList,
  byPageNumber
})
