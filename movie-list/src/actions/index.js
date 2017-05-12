import fetch from 'isomorphic-fetch'
import { camelizeKeys } from 'humps'
import {
  REQUEST_TOP_RATED,
  RECEIVE_TOP_RATED,
  REQUEST_FAILED,
  TOGGLE_MEUN,
  SORT_MOVIES_ARRAY
} from '../actionsConst'

export const requestTopRated  = () => ({
  type: REQUEST_TOP_RATED,
  isRequesting: true
})

export const receiveTopRated = json => ({
  type: RECEIVE_TOP_RATED,
  isRequesting: false,
  requestFailed: false,
  json
})

export const requestFailed = err => ({
  type: REQUEST_FAILED,
  requestFailed: true,
  isRequesting: false,
  err,
})

export const fetchTopRated = (pageNumber=1) => (dispatch, getState) => {
  dispatch(requestTopRated())
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=4bef8838c2fd078bd13d7127d8dedcd4&language=en-US?&page=${pageNumber}`
  ).then(
    response => response.json()
  ).then(
    json => {
      const camelizeJson = camelizeKeys(json)
      return dispatch(receiveTopRated(camelizeJson))
    },
    err => dispatch(requestFailed(err))
  )
}

// aciton for sort the movies arrayOfMovies
const sortMoviesArray = (sortedArray) => ({
  type: SORT_MOVIES_ARRAY,
  results: sortedArray
})

export const sortArrayByField = (field=null) => (dispatch, getState) => {
  const currState = getState()
  const {
    json: {
      results
    }
  } = currState.topRatedMovies.moviesList

  const copyResults = results.slice(0)

  copyResults.sort( (a,b) => {
    if( !field ) {
      if(typeof a[field] === 'string') {
        const dateA = new Date(a[field])
        const dateB = new Date(b[field])

        return dateA - dateB

      }
      return a[field] - a[field]
    }
    return false
  })

  return dispatch(sortMoviesArray(copyResults))
}

// action for toggle the menu
export const toggleMeun = () => ({
  type: TOGGLE_MEUN
})
