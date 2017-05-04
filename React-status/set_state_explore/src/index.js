import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { getJson } from './actions'

let middleware = [thunk]
if(process.env.NODE_ENV !== 'production') {
	middleware = [
		...middleware,
		createLogger()
	]
}

const store = createStore(
		reducers,
		applyMiddleware(...middleware)
	)

store.dispatch(getJson())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);
