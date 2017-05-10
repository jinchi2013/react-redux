import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './index'
import * as types from '../actionsConst/'

// sync actions test
describe('async : movie actions', () => {
  it('initiate the request to fetch data from top rated movie api', () => {
    expect(actions.requestTopRated()).toEqual({
      type: types.REQUEST_TOP_RATED,
      isRequesting: true
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
})

// async actions
const testURL = 'https://api.themoviedb.org'
const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('async: movie actions', ()=>{
  afterEach(()=>{
    nock.clearAll()
  })

  it('creates RECEIVE_TOP_RATED action when fetching movies has been done', ()=>{
    nock(testURL)
      .get('/3/movie/top_rated?api_key=4bef8838c2fd078bd13d7127d8dedcd4&language=en-US?&page=1')
      .reply(200, {
        results: ['movies array'],
        page: 1,
        totalPage: 10,
        totalResults: 100
      })

    const initState = {}
    const store = mockStore(initState)

    store.dispatch(actions.fetchTopRated(testURL)).then(()=>{
        expect(store.getActions()).toEqual([{
          type: types.RECEIVE_TOP_RATED,
          json: {
            results: ['movies array'],
            page: 1,
            totalPage: 10,
            totalResults: 100
          }
        }])
      })
  })
})
