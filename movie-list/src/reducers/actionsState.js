import {
  TOGGLE_MEUN,
  SELECT_SINGLE_MOVIE
} from '../actionsConst'
import { combineReducers } from 'redux'

const initState = {
  isMenuOpen: false
}

const menuActionState = (state=initState, action) => {
  switch(action.type) {
    case TOGGLE_MEUN:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      }
    default:
      return state
  }
}

const initSelectedMoviesList = {
  watchLaterList:[]
}

const selectedMoviesList = (state=initSelectedMoviesList, action) => {
  switch (action.type) {
    case SELECT_SINGLE_MOVIE:
      state.watchLaterList.push(action.movieId)
      return state
    default:
      return state
  }
}

export default combineReducers({
  menuActionState,
  selectedMoviesList
})
