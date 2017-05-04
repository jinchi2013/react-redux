import React from 'react'
import StockCantainer from './StockCantainer'
import CalendarComponent from '../components/CalendarComponent'


const FeatureCards = (props)=>{
	const style= {
		container: {
			padding: '0px 15px 15px 15px'
		}
	}

	const {
		stock,
		calendar,
		stockOrder
	} = props.featureCards

	return (
		<section style={style.container}>
			<CalendarComponent calendar={calendar} />
			<StockCantainer stocks={stock} stockOrder={stockOrder} />
		</section>
	)
}

export default FeatureCards
