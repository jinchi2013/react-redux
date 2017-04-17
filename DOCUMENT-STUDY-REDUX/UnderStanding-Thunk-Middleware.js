/**
	Async middleware like redux-thunk or redux-promise wraps the store's dispatch() method and allows you to dispatch something other than actions,
	For example function(for thunk) or Promise(for redux-promise).

	Any middleware you can use then interpret anything you dispatch, and in turn, can pass actions to the next middleware in the chain.\
*/

/**
	the middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
*/

// In a gist, Redux Thunk teaches Redux to recognize special kinds of actions that are in fact functions:

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

// It still recognizes plain object actions
store.dispatch({ type: 'INCREMENT' })

// But with thunk middleware, it also recognizes functions
store.dispatch(function (dispatch) {
  // ... which themselves may dispatch many times
  dispatch({ type: 'INCREMENT' })
  dispatch({ type: 'INCREMENT' })
  dispatch({ type: 'INCREMENT' })

  setTimeout(() => {
    // ... even asynchronously!
    dispatch({ type: 'DECREMENT' })
  }, 1000)
})

/**
	When this middleware is enabled, 
	if you dispatch a function, 
	Redux Thunk middleware will give it dispatch as an argument. 
	It will also “swallow” such actions so don’t worry about your reducers receiving weird function arguments. 
	Your reducers will only receive plain object actions—either emitted directly, 
	or emitted by the functions as we just described.
*/

/**
	If Redux Thunk middleware is enabled, 
	any time you attempt to dispatch a function instead of an action object, 
	the middleware will call that function with dispatch method itself as the first argument.
*/

// For example, in component.js
this.props.dispatch(addTodos('use thunk!'));

// For async process

// actions.js

const showNotification =(id, text) => ({ type: 'SHOW_NOTIFICATION', id, text })
const hideNotification = (id) => ({ type: 'HIDE_NOTIFICATION', id })

let nextNotificationId = 0
export function showNotificationWithTimeout(text) { // this will be the funtion you dispatch in the components
  return function (dispatch) {
    const id = nextNotificationId++
    dispatch(showNotification(id, text))

    setTimeout(() => {
      dispatch(hideNotification(id))
    }, 5000)
  }
}

// component.js

import { connect } from 'react-redux'

// ...

this.props.showNotificationWithTimeout('You just logged in.')

// ...

export default connect(
  mapStateToProps,
  { showNotificationWithTimeout } // bind the showNotificationWithTimeout function to dispatch, 
  								  // the dispatch will be passed as parameter to dispatch the action in side the showNotificationWithTimeout function(async)
  								  // or to dispatch another action when this async process is done.
)(MyComponent)


/**
	One of the benefits of Redux is that it makes state changes predictable and transparent. 
	Every time an action is dispatched, the new state is computed and saved. 
	The state cannot change by itself, it can only change as a consequence of a specific action.
*/



