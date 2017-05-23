import fetch from 'isomorphic-fetch'
import { camelizeKeys } from 'humps'
import * as Types from '../actionsConst'

export const requestTopRated  = () => ({
  type: Types.REQUEST_TOP_RATED,
  isRequesting: true
})

export const receiveTopRated = (json) => ({
  type: Types.RECEIVE_TOP_RATED,
  isRequesting: false,
  requestFailed: false,
  json
})

export const requestFailed = err => ({
  type: Types.REQUEST_FAILED,
  requestFailed: true,
  isRequesting: false,
  err,
})

export const cacheMovieResults = (camelizeJson, pageNumber) => ({
  type: Types.CACHE_MOVIE_RESULTS,
  camelizeJson,
  pageNumber
})

const convertIdMapToArray = (cachedJsonByPage) => Object.keys(cachedJsonByPage.results).map( key => cachedJsonByPage.results[key] )

export const fetchTopRated = (pageNumber=1) => (dispatch, getState) => {
  const currState = getState()
  const isPageNumCached = currState.topRatedMovies.byPageNumber.hasOwnProperty(pageNumber.toString())

  if(isPageNumCached){
    const cachedJsonByPage = currState.topRatedMovies.byPageNumber[pageNumber]
    const reFormattedJson = {
      ...cachedJsonByPage,
      results: convertIdMapToArray(cachedJsonByPage)
    }

    return dispatch( receiveTopRated(reFormattedJson) )
  }

  dispatch(requestTopRated())

  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=4bef8838c2fd078bd13d7127d8dedcd4&language=en-US?&page=${pageNumber}`
  ).then(
    response => response.json()
  ).then(
    json => {
      const camelizeJson = camelizeKeys(json)

      dispatch( cacheMovieResults(camelizeJson, pageNumber))

      return dispatch(receiveTopRated(camelizeJson))
    },
    err => dispatch(requestFailed(err))
  )
}

// aciton for sort the movies arrayOfMovies
const sortMoviesArray = (sortedArray) => ({
  type: Types.SORT_MOVIES_ARRAY,
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

// actions for select one movie to be added to another list
export const addLikedMoive = (movie, buttonType, page) => ({
  type: Types.ADD_LIKED_MOVIE,
  movie: movie,
  page: page,
  buttonType: buttonType
})

export const addDislikedMoive = (movie, buttonType, page) => ({
  type: Types.ADD_DISLIKED_MOVIE,
  movie: movie,
  page: page,
  buttonType: buttonType
})

export const addSingleMovie = (movie, buttonType, page) => (dispatch, getState) => {
  const currState = getState()

  if(currState.actionsState.selectedMoviesList[buttonType].idMap.hasOwnProperty(movie.id.toString())){
    return false
  }

  switch(buttonType) {
    case 'liked':
      return dispatch(addLikedMoive(movie, buttonType, page))
    case 'block':
      return dispatch(addDislikedMoive(movie, buttonType, page))
    default:
      return false
  }
}

// action for toggle the menu
export const toggleMeun = () => ({
  type: Types.TOGGLE_MEUN
})
