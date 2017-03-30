import React from 'react'
import calendarIcon from '../image/calendar-icon.png'

const CalendarComponent = (props) => {
	const style = {
		calendarContainer: {
			minHeight: 140,
			borderRadius: 8,
			backgroundColor: 'rgb(240, 240, 240)'

		},
		calendarTitle: {
			textTransform: 'uppercase',
			padding: 6,
			borderRadius: '8px 8px 0px 0px',
			backgroundColor: 'rgb(220, 220, 220)',
			fontSize: 11
		},
		calendarIcon: {
			background: `url("${calendarIcon}")`,
			backgroundSize: '13px 13px',
			width: 13,
			height: 13,
			display: 'inline-block',
			marginRight: 7,
			marginLeft: 4,
			verticalAlign: 'text-bottom'
		}
	}

	const {
		calendar
	} = props

	return (
		<div style={style.calendarContainer}>
			<div style={style.calendarTitle}>
				<span style={style.calendarIcon}></span>
				<span>Calendar</span>
			</div>
			<ul>
				{
					calendar.length === 0 ? 
						<li>No Events</li> :
						<li></li>
				}
			</ul>
		</div>
	)
}

export default CalendarComponent