import fetch from 'isomorphic-fetch'

export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const INVALID_MOVIES = 'INVALID_MOVIES'

export const invalidMovies = ()=>({
	"type": INVALID_MOVIES
});

const requestMovies = () => ({
	"type": REQUEST_MOVIES
})

const receiveMoives = (json) => ({
	type: RECEIVE_MOVIES,
	movies: json.results,
	receiveAt: Date.now()
})

const fetchMoives = () => {
	return (dispatch) => {
		dispatch(requestMovies())
		return fetch(`/movies`)
			.then(
				(res) => {
					return res.json()
							.then(
								(json) => {
									console.log(json);
									dispatch(receiveMoives(json));
								}
							)
				}
			)
			.catch(
				(err) => {
					console.log(`Fetch Error : ${err}`)
				}
			)
	}
}

const shouldPullMovies = (state) => {
	const movies = state.movies.movies
	if(movies.length === 0) {
		return true
	}
	if(movies.isPending) {
		return false
	}
	return movies.NeedToPull
}

export const fetchMoviesIfNeeded = () => {
	return (dispatch, getState) => {
		console.log(getState().movies);
		if(shouldPullMovies(getState())) {
			console.log('pass the condition!');
			return dispatch(fetchMoives())
		}
	}
}