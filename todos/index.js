//babel-polyfill will emulate a full es2015 enviroment and 
//is intended to be used in an application rather than a 
//lib/tool
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider, createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp);


//Provider make store={store} avalible for 
//the component in connect() method
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getELementById('root')
)