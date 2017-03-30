import React, { Component } from 'react'
import CalendarComponent from './CalendarComponent'


const FeatureCards = (props)=>{
	const style= {
		container: {
			padding: '0px 15px 15px 15px'
		}
	}

	const {
		stock,
		weather,
		calendar,
		tomorrow
	} = props.featureCards

	return (
		<div style={style.container}>
			<CalendarComponent calendar={calendar} />
		</div>
	)
}

export default FeatureCards