import React from 'react'
import {connect}  from 'react-redux'
import {
	fetchMoviesIfNeeded
} from '../actions'

class App extends React.Component {
	constructor(props) {
		super(props);
		//this._clickHandler = this._clickHandler.bind(this);
	}

	render() {
		let { isFetching, lastUpdated, moviesList } = this.props
		let isEmpty = moviesList.length === 0

		return (
				<div>Hello Movies</div>
			)
	}
}

const mapStateToProps = (state) => {
	let {movies} = state;
	let {
		isFetching,
		lastUpdated,
		movies: moviesList
	} = movies.moviesList || { isFetching: true, movies: [] }

	return {
		isFetching,
		lastUpdated,
		moviesList
	}
}

export default connect(mapStateToProps)(App)