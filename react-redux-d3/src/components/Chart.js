import React, { Component } from 'react'
import ScatterPlot from './ScatterPlot'

const styles = {
	width: 500,
	height: 300,
	padding: 30
}

//The number of data points for the chart
const numDataPoints = 50

// A function that return a random number from 0 - 1000
const randomNum = ()=> Math.floor(Math.random() * 1000)

// A function that creates an array of 50 elements of (x, y) coordinates
const randomDataSet = () => {
	return Array.apply(null, {length: numDataPoints}).map(()=> [randomNum(), randomNum()])
}

class Chart extends Component {
	constructor(props) {
		super(props)
		this.state = { data: randomDataSet() }
		this.randomizeData = this.randomizeData.bind(this)
	}

	randomizeData () {
		this.setState({
			data: randomDataSet()
		})
	}

	render() {
		return (
			<div>
				<h1>Playing With React and D3</h1>
				<ScatterPlot {...this.state} {...styles} />
				<div className='controls'>
					<button className='btn randomize' onClick={()=> this.randomizeData()}>
						Randomize Data
					</button>
				</div>
			</div>
		)
	}

}

export default Chart