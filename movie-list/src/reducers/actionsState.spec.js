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
        likedList:[],
        dislikedList:[]
      }
    }

    expect(actionsState(state, action)).toEqual({
      menuActionState: {
        isMenuOpen: true
      },
      selectedMoviesList: {
        likedList:[],
        dislikedList:[]
      }
    })
  })

  it('should handle ADD_LIKED_MOVIE action', ()=>{
    const action = {
      type: types.ADD_LIKED_MOVIE,
      movieId: 199
    }
    const state = {
      menuActionState: {
        isMenuOpen: false
      },
      selectedMoviesList: {
        likedList:[],
        dislikedList:[]
      }
    }

    expect(actionsState(state, action)).toEqual({
      menuActionState: {
        isMenuOpen: false
      },
      selectedMoviesList: {
        likedList:[199],
        dislikedList:[]
      }
    })
  })

  it('should handle ADD_DISLIKED_MOVIE action', ()=>{
    const action = {
      type: types.ADD_DISLIKED_MOVIE,
      movieId: 199
    }
    const state = {
      menuActionState: {
        isMenuOpen: false
      },
      selectedMoviesList: {
        likedList:[],
        dislikedList:[]
      }
    }

    expect(actionsState(state, action)).toEqual({
      menuActionState: {
        isMenuOpen: false
      },
      selectedMoviesList: {
        likedList:[],
        dislikedList:[199]
      }
    })
  })
})
