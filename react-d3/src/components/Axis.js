import React, { Component } from 'react'
import * as d3 from 'd3'

class Axis extends Component {
	constructor(props) {
		super(props)
		this.renderAxis = this.renderAxis.bind(this)
	}
	componentDidMount() {
    this.renderAxis()
  }

  componentDidUpdate() {
    this.renderAxis()
  }

  renderAxis() {
    let node  = this.axis
    console.log(node)
    let axis = this.props.orient === 'bottom' ? d3.axisBottom(this.props.scale) : d3.axisLeft(this.props.scale)
    d3.select(node).call(axis);
  }

	render() {
		return (
			<g className="axis" ref={(axis) => { this.axis = axis }} transform={this.props.translate}></g>
		)
	}
}

export default Axis
