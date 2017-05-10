import {
  REQUEST_TOP_RATED
} from '../actionsConst'

export const requestTopRated  = () => ({
  type: REQUEST_TOP_RATED,
  isRequesting: true
})
