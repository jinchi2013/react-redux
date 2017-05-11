import * as types from '../actionsConst'
import actionsState from './actionsState'

describe('actionsState', ()=>{
  it('should handle toggleMeun action', ()=>{
    const action = {
      type: types.TOGGLE_MEUN
    }

    const state = {
      menuActionState: {
        isMenuOpen: false
      }
    }

    expect(actionsState(state, action)).toEqual({
      menuActionState: {
        isMenuOpen: true
      }
    })
  })
})
