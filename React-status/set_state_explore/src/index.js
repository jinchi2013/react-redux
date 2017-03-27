import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const json = {
	headerButton: [
		'Today',
		'Notifications'
	],
	stock: [
		"1": {
			name: 'NASDAQ',
			val: 5828.74,
			status: '+0.19%'
		},
		"2": {
			name: 'NYSE',
			val: 11418.89,
			status: '-0.11%'
		},
		"3": {
			name: 'DOW J',
			val: 20596.72,
			status: '-0.29%'
		},
		"4": {
			name: 'AAPL',
			val: 140.74,
			status: '-0.20%'
		},
		"5": {
			name: 'SBUX',
			val: 56.81,
			status: '+1.72%'
		}
	],
	weather:[
		"1": {
			city: 'New York',
			temperature: -1,
			unit: 'celsius'
		},
		"2": {
			city: 'New Jersey',
			temperatur: 36,
			unit: 'fahrenheit'
		}
	],
	calendar: [],
	tomorrow: [],
	copyright: 'Weather information provided by The Weather Channel, LLC#?#?Stock information provided by YAHOO' 
}

ReactDOM.render(
  <App json={json} />,
  document.getElementById('root')
);


