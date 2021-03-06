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
              id: action.movie.id,
              page: action.page
            }
          }
        }
      }
    case Types.ADD_DISLIKED_MOVIE_FROM_LIKED:
      const copyLike = {...state.liked.idMap}
      delete copyLike[action.id]
      return {
        ...state,
        liked: {
          idArr: state.liked.idArr.filter( id => id !== action.id ),
          idMap: {
            ...copyLike
          }
        },
        block: {
          idArr: [ ...state.block.idArr, action.id ],
          idMap: {
            ...state.block.idMap,
            [action.id]: {
              id: action.id,
              page: action.page
            }
          }
        }
      }
    case Types.ADD_LIKED_MOVIE_FROM_BLOCKED:
      const copyBlock = {...state.block.idMap}
      delete copyBlock[action.id]
      return {
        ...state,
        block: {
          idArr: state.block.idArr.filter( id => id !== action.id ),
          idMap: {
            ...copyBlock
          }
        },
        liked: {
          idArr: [ ...state.liked.idArr, action.id ],
          idMap: {
            ...state.liked.idMap,
            [action.id]: {
              id: action.id,
              page: action.page
            }
          }
        }
      }
    case Types.REMOVE_MOVIE_FROM_LIST:
      const copyList = {...state[action.listType].idMap}
      delete copyList[action.id]
      return {
        ...state,
        [action.listType]: {
          idArr: state[action.listType].idArr.filter( id => id !== action.id ),
          idMap: {
            ...copyList
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
