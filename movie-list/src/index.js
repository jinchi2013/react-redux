import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {
	BrowserRouter as Router,
} from 'react-router-dom'

import reducers from './reducers'
import App from './App'

let middleware = [thunk]

if(process.env.NODE_ENV !== 'production') {
	middleware.push(createLogger())
}

const store = createStore(
		reducers,
		applyMiddleware(...middleware)
	)

ReactDOM.render(
  <Provider store={store}>
		<Router>
			<App />
		</Router>
  </Provider>,
  document.getElementById('root')
)
