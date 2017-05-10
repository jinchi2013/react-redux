import {
  REQUEST_TOP_RATED
} from '../actionsConst'
import { combineReducers } from 'redux'

const initState = {
  isRequesting: false
}

const topRatedMovies = (state=initState, action) => {
  switch(action.type) {
    case REQUEST_TOP_RATED :
      return {
        ...state,
        isRequesting: action.isRequesting
      }
    default:
      return state
  }
}

export default combineReducers({
  topRatedMovies
})
