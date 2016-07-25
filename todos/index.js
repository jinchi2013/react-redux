import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider, createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getELementById('root')
)