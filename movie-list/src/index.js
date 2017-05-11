import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

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
  	<App />
  </Provider>,
  document.getElementById('root')
)
