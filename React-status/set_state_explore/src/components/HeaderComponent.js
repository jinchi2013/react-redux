import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getHeaderButtons } from '../reducers/stocks'

class HeaderComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todayPanel: true,
			activePanel: 'Today'
		}
		this._togglePanel = this._togglePanel.bind(this)
	}

	_togglePanel(e) {
		let activePanel = e.target.getAttribute('data-id')

		if(activePanel !== this.state.activePanel) {
			this.setState((state)=> ({
				todayPanel: !state.todayPanel,
				activePanel: activePanel
			}))
		}
	}

	render() {
		const style = {
			headerStyle: {
				textAlign: "center",
				padding: 10,
				borderBottom: "2px solid rgb(123, 123, 123)"
			},
			basicButtonsStyle: {
				width: 140,
				border: "0.1px solid transparent",
				borderRadius: 3
			},
			todayButtonsStyle: {
				backgroundColor: this.state.todayPanel ? "rgb(236, 236, 236)" : "rgb(144, 144, 144)",
				color: this.state.todayPanel ? "rgb(47, 47, 47)" : "rgb(242, 242, 239)",
			},
			notifyButtonsStyle: {
				backgroundColor: this.state.todayPanel ? "rgb(144, 144, 144)" : "rgb(236, 236, 236)",
				color: this.state.todayPanel ? "rgb(242, 242, 239)" : "rgb(47, 47, 47)",
			}
		}

		const { buttons, isRequesting } = this.props
		const toggleButtons = buttons.map( (button, index)=>{
			let buttonsStyle

			if(button === 'Today') {
				buttonsStyle = {
					...style.basicButtonsStyle,
					...style.todayButtonsStyle
				}
			} else {
				buttonsStyle = {
					...style.basicButtonsStyle,
					...style.notifyButtonsStyle
				}	
			}

			return (
						<button onClick={this._togglePanel} 
						    key={index}
						    style={buttonsStyle}
						    data-id={button}
					 	>
						 {button}
					 	</button>
					)
		})

		return (
				<section style={style.headerStyle}>
					{  
						isRequesting ? 'loading...' : toggleButtons
					}
				</section>
			)
	}
}

const mapStateToProps = (state) => {
	const {
		isRequesting
	} = state.stocks

	return {
		buttons: getHeaderButtons(state.stocks),
		isRequesting
	}
}

export default connect(
	mapStateToProps
)(HeaderComponent)
