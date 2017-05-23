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
  disliked:{
    idArr: [],
    idMap: {}
  }
}

const selectedMoviesList = (state=initSelectedMoviesList, action) => {
  switch (action.type) {
    case Types.ADD_LIKED_MOVIE:
      return {
        ...state,
        liked: {
          idArr: [
            ...state.liked.idArr,
            action.movie.id
          ],
          idMap: {
            ...state.liked.idMap,
            [action.movie.id]: action.movie
          }
        }
      }
    case Types.ADD_DISLIKED_MOVIE:
      return {
        ...state,
        disliked: {
          idArr: [
            ...state.disliked.idArr,
            action.movie.id
          ],
          idMap: {
            ...state.disliked.idMap,
            [action.movie.id]: action.movie
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
