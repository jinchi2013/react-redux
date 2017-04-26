import React, { Component } from 'react'

class StockCantainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			stocks: props.stocks
		}
	}

	render(){
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
				//background: `url("${calendarIcon}")`,
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
		} = this.state

		return (
			<div style={style.calendarContainer}>
				<div style={style.calendarTitle}>
					<span style={style.calendarIcon}></span>
					<span>STOCKS</span>
				</div>
				<ul>
					{
						stocks.length === 0 ? 
							<li>No Stocks Data</li> :
							stocks.map( stock => <li key={stock.id}>{stock.name}</li> )
					}
				</ul>
			</div>
		)
	}
}

export default StockCantainer
