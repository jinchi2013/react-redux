import { combineReducers } from 'redux'
import topRatedMovies from './topRatedMovies'
import actionsState from './actionsState'

export default combineReducers({
	topRatedMovies,
	actionsState
})

export const preparePosterSrcLink = posterPath => `https://image.tmdb.org/t/p/w500${posterPath}`
