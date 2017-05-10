import { camelizeKeys } from 'humps'
import {
  REQUEST_TOP_RATED,
  RECEIVE_TOP_RATED,
  REQUEST_FAILED
} from '../actionsConst'

export const requestTopRated  = ()=>({
  type: REQUEST_TOP_RATED,
  isRequesting: true
})

export const receiveTopRated = (json)=>({
  type: RECEIVE_TOP_RATED,
  isRequesting: false,
  requestFailed: false,
  json: json
})

export const requestFailed = (err) => ({
  type: REQUEST_FAILED,
  requestFailed: true,
  isRequesting: false,
  err: err,
})

export const fetchTopRated = (testURL='', pageNumber=1) => (dispatch, getState) => {
  dispatch(requestTopRated())
  const hostName = testURL === ''? 'https://api.themoviedb.org' : testURL
  return fetch(
    `${hostName}/3/movie/top_rated?api_key=4bef8838c2fd078bd13d7127d8dedcd4&language=en-US?&page=${pageNumber}`
  ).then(
    response => response.json()
  ).then(
    json => {
      const camelizeJson = camelizeKeys(json)
      return dispatch(receiveTopRated(camelizeJson))
    }, err => dispatch(requestFailed(err))
  )
}
