/**
	When you call an asynchronous API, 
	there are two crucial moments in time: the moment you start the call, 
	and the moment when you receive an answer (or a timeout).
*/

/**
	Each of these two monents usually require a change in the application state;
	
	Usually for any Api request you'll want to dispatch at least three different kinds of actions
*/

/**
	An action informing the reducers that the request began

		The reducers may handle this action by toggling an isFetching flag in the state. This way the UI knows it's time to show a spinner.

*/

export const fetchPostsRequest = () => ({
	type: 'FETCH_POSTS_REQUEST'
})

/**
	An action informing the reducers that the request finished successfully.

		The reducers may handle this action by merging the new data into the state they manage and resetting isFetching. 
		The UI would hide the spinner, and display the fetched data.
*/

export const fetchPostsSuccess = () => {
	type: 'FETCH_POSTS_SUCCESS',
	response: {...json}
}

/**
	An action informing the reducers that the request failed.

		The reducers may handle this action by resetting isFetching. 
		Additionally, some reducers may want to store the error message so the UI can display it.
*/

export const fetchPostsFail = (error) => {
	type: 'FETCH_POSTS_FAILURE',
	error: error
}

/**
	See below for detail

*/

import fetch from 'isomorphic-fetch'

const fetchPostsRequest = (subreddit) => ({
	type: 'FETCH_POSTS_REQUEST',
	subreddit
})


// when dispatch the FETCH_POSTS_SUCCESS action put in 
// subreddit(which you also used to make request) and json(response object)
const fetchPostsSuccess = (subreddit, json) => ({
	type: 'FETCH_POSTS_SUCCESS',
	subreddit,
	posts: json.data.children.map(child => child.data),
	receivedAt: Date.now()
})

// Meet our first thunk action creator!
// when thunk is applied to dispatch an Async function, the dispatch will be passed into the function
// then dispatch can be used in the callback of the Async function
// this is why the thunk can handle the Async process of redux
export const fetchData = (subreddit) => (dispatch) => {

	// First dispatch: the app state is updated to inform
	// that the api call is starting.
	dispatch(fetchPostsRequest(subreddit));

	return fetch(`https://www.reddit.com/r/${subreddit}.json`)
		.then(response => response.json)
		.then(json => dispatch(fetchPostsSuccess(subreddit, json)))
		.catch(error => dispatch(fetchPostsFail(error)))
}
