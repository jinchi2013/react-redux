import { combineReducers } from 'redux'
import topRatedMovies from './topRatedMovies'
import actionsState from './actionsState'

export default combineReducers({
	topRatedMovies,
	actionsState
})
