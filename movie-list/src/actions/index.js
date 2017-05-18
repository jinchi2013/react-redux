import fetch from 'isomorphic-fetch'
import { camelizeKeys } from 'humps'
import {
  REQUEST_TOP_RATED,
  RECEIVE_TOP_RATED,
  REQUEST_FAILED,
  TOGGLE_MEUN,
  SORT_MOVIES_ARRAY,
  CACHE_MOVIE_RESULTS
} from '../actionsConst'

export const requestTopRated  = () => ({
  type: REQUEST_TOP_RATED,
  isRequesting: true
})

export const receiveTopRated = (json) => ({
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

export const cacheMovieResults = (camelizeJson, pageNumber) => ({
  type: CACHE_MOVIE_RESULTS,
  camelizeJson,
  pageNumber
})

export const fetchTopRated = (pageNumber=1) => (dispatch, getState) => {

  dispatch(requestTopRated())

  const currState = getState()
  const isPageNumCached = currState.topRatedMovies.byPageNumber.hasOwnProperty(pageNumber.toString())

  if(isPageNumCached){
    return dispatch( receiveTopRated(currState.topRatedMovies.byPageNumber[pageNumber]) )
  }

  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=4bef8838c2fd078bd13d7127d8dedcd4&language=en-US?&page=${pageNumber}`
  ).then(
    response => response.json()
  ).then(
    json => {
      const camelizeJson = camelizeKeys(json)

      if(!isPageNumCached) {
        dispatch( cacheMovieResults(camelizeJson, pageNumber))
      }

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

export const sortArrayByField = (field=null, upOrDown) => (dispatch, getState) => {
  const currState = getState()
  const {
    json: {
      results
    }
  } = currState.topRatedMovies.moviesList

  const copyResults = results.slice(0)
  switch (field) {
    case 'title':
      copyResults.sort((a, b) => {
        const titleA = a.title.toUpperCase(); // ignore upper and lowercase
        const titleB = b.title.toUpperCase(); // ignore upper and lowercase
        if (titleA < titleB) {
          return upOrDown ? -1 : 1;
        }
        if (titleA > titleB) {
          return upOrDown ? 1 : -1;
        }
        // names must be equal
        return 0;
      })
      break
    case 'voteCount':
    case 'voteAverage':
      copyResults.sort( (a,b) => upOrDown ? a[field] - b[field] : b[field] - a[field] )
      break
    case 'releaseDate':
      copyResults.sort( (a,b) => {
        const dateA = new Date(a[field])
        const dateB = new Date(b[field])

        return upOrDown ? dateA - dateB : dateB - dateA
      })
      break
    default:
      return false
  }

  return dispatch(sortMoviesArray(copyResults))
}

// action for toggle the menu
export const toggleMeun = () => ({
  type: TOGGLE_MEUN
})
