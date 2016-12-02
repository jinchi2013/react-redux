/**
 * Created by 9cjin on 12/2/16.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp);