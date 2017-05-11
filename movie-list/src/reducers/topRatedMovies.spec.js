import * as types from '../actionsConst'
import topRatedMovies from './topRatedMovies'

describe('topRatedMovies', ()=>{
  it('should handle REQUEST_TOP_RATED action', ()=> {
    const action = {
      type: types.REQUEST_TOP_RATED,
      isRequesting: true
    }

    const initState = {
      moviesList: {
          isRequesting: false
      }
    }

    expect(topRatedMovies(initState, action)).toEqual({
      moviesList: {
          isRequesting: true
      }
    })
  })

  it('should handle RECEIVE_TOP_RATED action', ()=> {
    const action = {
      type: types.RECEIVE_TOP_RATED,
      json: {
        data: 'data'
      },
      isRequesting: false,
      requestFailed: false
    }

    const state = {
      moviesList: {
          isRequesting: true
      }
    }

    expect(topRatedMovies(state, action)).toEqual({
      moviesList: {
        isRequesting: false,
        requestFailed: false,
        json: {
          data: 'data'
        }
      }
    })
  })

  it('should handle REQUEST_FAILED action', ()=> {
    const action = {
      type: types.REQUEST_FAILED,
      requestFailed: true,
      isRequesting: false,
      err: 'something is worng'
    }

    const state = {
      moviesList: {
        requestFailed: false
      }
    }

    expect(topRatedMovies(state, action)).toEqual({
      moviesList: {
        requestFailed: true,
        isRequesting: false,
        err: 'something is worng'
      }
    })
  })
})
