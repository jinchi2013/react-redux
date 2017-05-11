import fetch from 'isomorphic-fetch'
import { camelizeKeys } from 'humps'
import {
  REQUEST_TOP_RATED,
  RECEIVE_TOP_RATED,
  REQUEST_FAILED,
  TOGGLE_MEUN
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

// action for toggle the menu
export const toggleMeun = () => ({
  type: TOGGLE_MEUN
})
