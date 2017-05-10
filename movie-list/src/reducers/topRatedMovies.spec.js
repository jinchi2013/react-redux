import * as types from '../actionsConst'
import topRatedMovies from './topRatedMovies'

describe('topRatedMovies', ()=>{
  it('should handle REQUEST_TOP_RATED action', ()=> {
    const action = {
      type: types.REQUEST_TOP_RATED,
      isRequesting: true
    }

    const initState = {
      topRatedMovies: {
          isRequesting: false
      }
    }

    expect(topRatedMovies(initState, action)).toEqual({
      topRatedMovies: {
          isRequesting: true
      }
    })
  })
})