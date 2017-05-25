import * as Types from '../actionsConst'
import { combineReducers } from 'redux'

const initState = {
  isMenuOpen: false
}

const menuActionState = (state=initState, action) => {
  switch(action.type) {
    case Types.TOGGLE_MEUN:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      }
    default:
      return state
  }
}

const initSelectedMoviesList = {
  liked:{
    idArr: [],
    idMap: {}
  },
  block:{
    idArr: [],
    idMap: {}
  }
}

const selectedMoviesList = (state=initSelectedMoviesList, action) => {
  switch (action.type) {
    case Types.ADD_LIKED_MOVIE:
    case Types.ADD_DISLIKED_MOVIE:
      return {
        ...state,
        [action.buttonType]: {
          idArr: [
            ...state[action.buttonType].idArr,
            action.movie.id
          ],
          idMap: {
            ...state[action.buttonType].idMap,
            [action.movie.id]: {
              ...action.movie,
              page: action.page
            }
          }
        }
      }
    default:
      return state
  }
}

export default combineReducers({
  menuActionState,
  selectedMoviesList
})
