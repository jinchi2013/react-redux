/**
 * Created by chi on 7/26/16.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.js';
import todoApp from './reducers';

const rootElement = document.getElementById('root');
const store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);