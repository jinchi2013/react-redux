import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './index'
import * as types from '../actionsConst/'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

// sync actions test
describe('sync : movie actions', () => {
  it('initiate the request to fetch data from top rated movie api', () => {
    expect(actions.requestTopRated()).toEqual({
      type: types.REQUEST_TOP_RATED,
      isRequesting: true,
    })
  })

  it('handle receiveTopRated action, the fetch request sucess', ()=>{
    const json = {data: 'json data'}
    expect(actions.receiveTopRated(json)).toEqual({
      type: types.RECEIVE_TOP_RATED,
      json: json,
      isRequesting: false,
      requestFailed: false,
    })
  })

  it('handle requestFailed action, some fetch request failed', ()=>{
    const err = { msg: 'something is wrong!' };
    expect(actions.requestFailed(err)).toEqual({
      type: types.REQUEST_FAILED,
      err: err,
      requestFailed: true,
      isRequesting: false,
    })
  })

  it('handle toggleMeun action', ()=>{
    expect(actions.toggleMeun()).toEqual({
      type: types.TOGGLE_MEUN
    })
  })

  it('handle CACHE_MOVIE_RESULTS action', ()=>{
    const camelizeJson = {
      page: 1
    }
    const pageNumber = 2;

    expect(actions.cacheMovieResults(camelizeJson, pageNumber)).toEqual({
      type: types.CACHE_MOVIE_RESULTS,
      camelizeJson: camelizeJson,
      pageNumber: pageNumber
    })
  })

  it('handle sortArrayByField action', ()=>{
    const initState = {
      topRatedMovies: {
        moviesList: {
          json:{
            results: [{voteCount: 1},{voteCount: 2},{voteCount: 3}]
          }
        }
      }
    }
    const field = 'voteCount'

    const store = mockStore(initState)
    store.dispatch(actions.sortArrayByField(field, false))
    const action = store.getActions()
    const expectedActions = [
      {
        type: types.SORT_MOVIES_ARRAY,
        results: [{voteCount: 3},{voteCount: 2},{voteCount: 1}]
      }
    ]

    expect(action).toEqual(expectedActions)
  })
})

// async actions
describe('async: movie actions', ()=>{
  afterEach(()=>{
    nock.cleanAll()
  })

  it('creates RECEIVE_TOP_RATED action when fetching movies has been done', ()=>{
    nock('https://api.themoviedb.org')
      .get('/3/movie/top_rated?api_key=4bef8838c2fd078bd13d7127d8dedcd4&language=en-US?&page=2')
      .reply(200, {
        results: ['movies array'],
        page: 2,
        totalPage: 10,
        totalResults: 100
      })

    const initState = {
      topRatedMovies: {
        byPageNumber: {

        }
      }
    }
    const store = mockStore(initState)
    return store.dispatch(actions.fetchTopRated(2))
      .then(()=>{
        const actions = store.getActions()
        const expectedActions = [
          {
            "isRequesting": true,
            "type": "REQUEST_TOP_RATED"
          },
          {
            "camelizeJson": {
              "page": 2,
              "results": ["movies array"],
              "totalPage": 10,
              "totalResults": 100
            },
            "pageNumber": 2,
            "type": "CACHE_MOVIE_RESULTS"
          },
          {
            "isRequesting": false,
            "json": {
              "page": 2,
              "results": ["movies array"],
              "totalPage": 10,
              "totalResults": 100
            },
            "requestFailed": false,
            "type": "RECEIVE_TOP_RATED"
          }
        ]
        expect(actions).toEqual(expectedActions)
      })
  })
})
