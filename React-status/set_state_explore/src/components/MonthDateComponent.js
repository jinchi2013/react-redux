import React from 'react'

const MonthDateComponent = (props)=> {
	const monthDateStyle = {
		dateStyle: {
			marginLeft: 5
		},
		dateDecoration: {
			verticalAlign: 'super',
			fontSize: 15
		}
	}

	return (
		<div>
			<span>{props.month}</span>
			<span style={monthDateStyle.dateStyle}>
				{props.date}
				<span style={monthDateStyle.dateDecoration}>th</span>
			</span>
		</div>
	)
}

export default MonthDateComponent