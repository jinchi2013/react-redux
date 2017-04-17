import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducers from './reducers'
import * as fromMiddleware from './middlewares'
import './index.css'

const middleware = [fromMiddleware.logger]

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
