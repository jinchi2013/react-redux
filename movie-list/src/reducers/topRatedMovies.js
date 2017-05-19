import {
  REQUEST_TOP_RATED,
  RECEIVE_TOP_RATED,
  REQUEST_FAILED,
  SORT_MOVIES_ARRAY,
  CACHE_MOVIE_RESULTS
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
    case SORT_MOVIES_ARRAY :
      return {
        ...state,
        json: {
          ...state.json,
          results: action.results
        }
      }
    default:
      return state
  }
}

const byPageNumber = (state={}, action) => {
  switch(action.type) {
    case CACHE_MOVIE_RESULTS :
      return {
        ...state,
        [action.pageNumber]: action.camelizeJson
      }
    default:
      return state
  }
}

export default combineReducers({
  moviesList,
  byPageNumber
})

export const moviesListById = (state, pageNumber) => state.byPageNumber[pageNumber].reduce((res, movie) => {
  res[movie.id] = movie
  return res
}, {})

export const getMovieById = (state, pageNumber, id) => moviesListById(state, pageNumber)[id]
