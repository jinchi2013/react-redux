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

	componentDidMount() {
		console.log('in the componentDidMount');
		let {dispatch} = this.props;
		dispatch( fetchMoviesIfNeeded() )
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.moviesList !== this.props.moviesList) {
			let {dispatch} = nextProps
			dispatch( fetchMoviesIfNeeded() )
		}
	}

	render() {
		let { isPending, lastUpdated, movies } = this.props
		let isEmpty = movies.movies.length === 0
		console.log('this.props');
		console.log(this.props);

		return (
				<div>
					<h1>Hello Movies</h1>
					<ul>
						{
							movies.movies.map((movie, i) => {
								return (
										<li key={i}>
											<h3>{movie.title}</h3>
										</li>
									)
							})
						}
					</ul>
				</div>

			)
	}
}

const mapStateToProps = (state) => {
	let {movies} = state;

	return {
		movies
	}
}

export default connect(mapStateToProps)(App)