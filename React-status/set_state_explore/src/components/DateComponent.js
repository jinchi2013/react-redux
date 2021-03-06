import React, { Component } from 'react'
import { connect } from 'react-redux'

import WeekDayComponent from './WeekDayComponent'
import MonthDateComponent from './MonthDateComponent'

import { getFromDateObj } from '../reducers/stocks'

class DateComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dateObj: new Date()
		}
		this._updateDateObj = this._updateDateObj.bind(this)
	}

	componentDidMount() {
		this._updateDateObj()
	}

	_updateDateObj() {
		setInterval(()=>{
			const newDateObj = new Date()
			this.setState((state)=>{
				if(state.dateObj.getDay() !== newDateObj.getDay()
				   || state.dateObj.getDate() !== newDateObj.getDate()) {

					return {
						dateObj: newDateObj
					}
				}
			})
		}, 10000)
	}

	render () {
		const containerStyle = {
			padding: '30px 30px 20px 30px',
			fontSize: 25,
			fontFamily: 'cursive'
		}

		const {
			weekDayList,
			monthsList
		} = this.props

		const weekDayIndex = this.state.dateObj.getDay()
		const monthIndex = this.state.dateObj.getMonth()
		const date = this.state.dateObj.getDate()

		return (
			<section style={containerStyle}>
				<WeekDayComponent weekDay={weekDayList[weekDayIndex]} />
				<MonthDateComponent month={monthsList[monthIndex]} date={date} />
			</section>
		)
	}
}

const mapStateToProps = (state) => (
	{
		weekDayList: getFromDateObj(state.json, 'weekDayList'),
		monthsList: getFromDateObj(state.json, 'monthsList')
	}
)

export default connect(
	mapStateToProps
)(DateComponent)
