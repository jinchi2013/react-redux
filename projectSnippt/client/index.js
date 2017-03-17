import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from '../Root'
import configureStore from '../store/configureStore'

const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

const store = configureStore(preloadedState)
const history = syncHistoryWithStore(browserHistory, store)
const rootElement = document.getElementById('app')

render(
  <Root store={store} history={history} />,
  rootElement
)