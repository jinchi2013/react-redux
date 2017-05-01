import React, { Component } from 'react'
import StockLists from '../components/StockLists'

import stockMarketIcon from '../image/stock-market.png'

class StockCantainer extends Component {

	render(){
		const style = {
			stockContainer: {
				minHeight: 140,
				borderRadius: 8,
				backgroundColor: 'rgb(240, 240, 240)'

			},
			stockTitle: {
				textTransform: 'uppercase',
				padding: 6,
				borderRadius: '8px 8px 0px 0px',
				backgroundColor: 'rgb(220, 220, 220)',
				fontSize: 11
			},
			stockIcon: {
				background: `url("${stockMarketIcon}")`,
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
			stocks
		} = this.props

		return (
			<div style={style.stockContainer}>
				<div style={style.stockTitle}>
					<span style={style.stockIcon}></span>
					<span>STOCKS</span>
				</div>
				{
					stocks.length === 0 ? 
						<h4>No Stocks Data</h4> :
						<StockLists stocks={stocks} />
				}
			</div>
		)
	}
}

export default StockCantainer
