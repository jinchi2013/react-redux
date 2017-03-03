import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const configureStore = (preloadedState)=>{
	let store = createStore(
			rootReducer,
			preloadedState,
			applyMiddleware(thunkMiddleware, createLogger())
		)

	if(module.hot) {
		// Enable webpack hot module replacement for reducer
		module.hot.accept('../reducers', ()=>{
			let nextRootReducer = require('../reducers').default
			store.replaceReducer(nextRootReducer);
		})
	}

	return store
}

export default configureStore
