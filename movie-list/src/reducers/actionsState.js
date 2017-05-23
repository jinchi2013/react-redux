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
  likedList:[],
  dislikedList:[]
}

const selectedMoviesList = (state=initSelectedMoviesList, action) => {
  switch (action.type) {
    case Types.ADD_LIKED_MOVIE:
      return {
        ...state,
        likedList: [
          ...state.likedList,
          action.movieId
        ]
      }
    case Types.ADD_DISLIKED_MOVIE:
      return {
        ...state,
        dislikedList: [
          ...state.dislikedList,
          action.movieId
        ]
      }
    default:
      return state
  }
}

export default combineReducers({
  menuActionState,
  selectedMoviesList
})
