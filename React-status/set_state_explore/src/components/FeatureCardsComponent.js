import React from 'react'
import StockCantainer from '../containers/StockCantainer'
import CalendarComponent from './CalendarComponent'


const FeatureCards = (props)=>{
	const style= {
		container: {
			padding: '0px 15px 15px 15px'
		}
	}

	const {
		stock,
		calendar
	} = props.featureCards

	return (
		<div style={style.container}>
			<CalendarComponent calendar={calendar} />
			<StockCantainer stocks={stock} />
		</div>
	)
}

export default FeatureCards