//babel-polyfill will emulate a full es2015 enviroment and 
//is intended to be used in an application rather than a 
//lib/tool
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp);


//Provider make store={store} avalible for 
//the component in connect() method
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);