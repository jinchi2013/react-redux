import 'babel-polyfill';
import React from 'react';
import ReactDOM  from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getAllProducts } from './actions';
import App from './containers/App';

const middleware = process.env.NODE_ENV === 'production' ?
    [ thunk ] :
    [ thunk, logger() ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

//Don't understand the point here
store.dispatch(getAllProducts());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);