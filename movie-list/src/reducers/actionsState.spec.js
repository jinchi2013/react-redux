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
      },
      selectedMoviesList: {
        liked:{
          idArr: [],
          idMap: {}
        },
        block:{
          idArr: [],
          idMap: {}
        }
      }
    }

    expect(actionsState(state, action)).toEqual({
      menuActionState: {
        isMenuOpen: true
      },
      selectedMoviesList: {
        liked:{
          idArr: [],
          idMap: {}
        },
        block:{
          idArr: [],
          idMap: {}
        }
      }
    })
  })

  it('should handle ADD_LIKED_MOVIE action', ()=>{
    const action = {
      type: types.ADD_LIKED_MOVIE,
      movie: {
        id: 100
      },
      buttonType: 'liked'
    }
    const state = {
      menuActionState: {
        isMenuOpen: false
      },
      selectedMoviesList: {
        liked:{
          idArr: [],
          idMap: {}
        },
        block:{
          idArr: [],
          idMap: {}
        }
      }
    }

    expect(actionsState(state, action)).toEqual({
      menuActionState: {
        isMenuOpen: false
      },
      selectedMoviesList: {
        liked:{
          idArr: [100],
          idMap: {
            '100': {
              id: 100
            }
          }
        },
        block:{
          idArr: [],
          idMap: {}
        }
      }
    })
  })

  it('should handle ADD_DISLIKED_MOVIE action', ()=>{
    const action = {
      type: types.ADD_DISLIKED_MOVIE,
      movie: {
        id: 100
      },
      buttonType: 'block'
    }
    const state = {
      menuActionState: {
        isMenuOpen: false
      },
      selectedMoviesList: {
        liked:{
          idArr: [],
          idMap: {}
        },
        block:{
          idArr: [],
          idMap: {}
        }
      }
    }

    expect(actionsState(state, action)).toEqual({
      menuActionState: {
        isMenuOpen: false
      },
      selectedMoviesList: {
        liked:{
          idArr: [],
          idMap: {}
        },
        block:{
          idArr: [100],
          idMap: {
            '100': {
              id: 100
            }
          }
        }
      }
    })
  })
})
