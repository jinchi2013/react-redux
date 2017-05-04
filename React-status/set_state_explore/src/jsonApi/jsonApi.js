const json = {
	featureCards: {
		headerButton: [
			'Today',
			'Notifications'
		],
		stock: [
			{
				name: 'NASDAQ',
				val: 5828.74,
				status: +0.19,
				id: '1'
			},
			{
				name: 'NYSE',
				val: 11418.89,
				status: -0.11,
				id: '2'
			},
			{
				name: 'DOW J',
				val: 20596.72,
				status: -0.29,
				id: '3'
			},
			{
				name: 'AAPL',
				val: 140.74,
				status: -0.20,
				id: '4'
			},
			{
				name: 'SBUX',
				val: 56.81,
				status: +1.72,
				id: '5'
			}
		],
		stockOrder: ['id', 'name', 'val', 'status'],
		weather:[
			"1": {
				city: 'New York',
				temperature: -1,
				unit: 'celsius'
			},
			"2": {
				city: 'New Jersey',
				temperature: 36,
				unit: 'fahrenheit'
			}
		],
		calendar: [],
		tomorrow: [],
	},
	copyright: 'Weather information provided by The Weather Channel, LLC#?#?Stock information provided by YAHOO',
	date : {
		weekDayList: {
			'0': 'Sunday',
			'1': 'Monday',
			'2': 'Tuesday',
			'3': 'Wednesday',
			'4': 'Thursday',
			'5': 'Friday',
			'6': 'Saturday'
		},
		monthsList: {
			'0': 'January',
			'1': 'February',
			'2': 'March',
			'3': 'April',
			'4': 'May',
			'5': 'June',
			'6': 'July',
			'7': 'August',
			'8': 'September',
			'9': 'October',
			'10': 'November',
			'11': 'December'
		}
	}
}

function jsonApi() {
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			resolve(json)
		}, 500 )
	} )
}

export default jsonApi
