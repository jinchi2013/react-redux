import {
  TOGGLE_MEUN
} from '../actionsConst'
import { combineReducers } from 'redux'

const initState = {
  isMenuOpen: false
}

const menuActionState = (state={initState}, action) => {
  switch(action.type) {
    case TOGGLE_MEUN:
      return {
        isMenuOpen: !state.isMenuOpen
      }
    default:
      return state
  }
}

export default combineReducers({
  menuActionState
})
