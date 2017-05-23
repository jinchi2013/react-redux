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
      },
      byPageNumber: {}
    }

    expect(topRatedMovies(initState, action)).toEqual({
      moviesList: {
          isRequesting: true
      },
      byPageNumber: {}
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
      },
      byPageNumber: {}
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
      },
      byPageNumber: {}
    })
  })

  it('should handle SORT_MOVIES_ARRAY', ()=>{
    const action = {
      type: types.SORT_MOVIES_ARRAY,
      results: [1,2,3]
    }

    const state = {
      moviesList: {
        json: {
          page: 2,
          totalPage: 10,
          results: [3,2,1]
        }
      },
      byPageNumber: {}
    }

    expect(topRatedMovies(state, action)).toEqual({
      moviesList: {
        json: {
          page: 2,
          totalPage: 10,
          results: [1,2,3]
        }
      },
      byPageNumber: {}
    })
  })

  it('should handle CACHE_MOVIE_RESULTS', ()=>{
    const action = {
      type: types.CACHE_MOVIE_RESULTS,
      pageNumber: 2,
      camelizeJson: { results: [{id:100}, {id:101}] }
    }

    const state = {
      moviesList: {},
      byPageNumber: {}
    }

    expect(topRatedMovies(state, action)).toEqual({
      moviesList: {},
      byPageNumber: {
        "2": {
          results: {
            '100': {
              id:100,
              liked: false,
              block: false
            },
            '101': {
              id:101,
              liked: false,
              block: false
            }
          }
        }
      }
    })
  })
})
