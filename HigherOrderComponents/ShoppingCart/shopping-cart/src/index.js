import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProduct } from './actions'

let middleware = [thunk]
if(process.env.NODE_ENV !== 'production') {
	middleware = [
		...middleware,
		createLogger()
	]
}

const store = createStore(
		reducer,
		applyMiddleware(...middleware)
	)

store.dispatch(getAllProduct())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
)
