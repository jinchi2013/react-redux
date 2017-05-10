import * as actions from './index'
import * as types from '../actionsConst/'

describe('movie actions', () => {
  it('initiate the request to fetch data from top rated movie api', () => {
    expect(actions.requestTopRated()).toEqual({
      type: types.REQUEST_TOP_RATED,
      isRequesting: true
    })
  })
})
