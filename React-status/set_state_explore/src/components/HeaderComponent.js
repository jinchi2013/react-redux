import React, { Component } from 'react'

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
		//console.log(e.target.getAttribute('data-id'));
		let activePanel = e.target.getAttribute('data-id')

		if(activePanel !== this.state.activePanel) {
			this.setState(()=> ({
				todayPanel: !this.state.todayPanel,
				activePanel: activePanel
			}))
		}
	}

	render() {
		const style = {
			headerStyle: {
				textAlign: "center",
				backgroundColor: "rgb(186, 186, 186)",
				padding: 10,
				borderBottom: "2px solid rgb(123, 123, 123)"
			},
			basicButtonsStyle: {
				width: 140,
				border: "0.1px solid transparent",
				borderRadius: 3
			},
			activeButtonsStyle: {
				backgroundColor: this.state.todayPanel ? "rgb(236, 236, 236)" : "rgb(144, 144, 144)",
				color: this.state.todayPanel ? "rgb(47, 47, 47)" : "rgb(242, 242, 239)",
			},
			inactiveButtonsStyle: {
				backgroundColor: this.state.todayPanel ? "rgb(144, 144, 144)" : "rgb(236, 236, 236)",
				color: this.state.todayPanel ? "rgb(242, 242, 239)" : "rgb(47, 47, 47)",
			}
		}

		const { buttons } = this.props
		const toggleButtons = buttons.map( (button, index)=>{
				let buttonsStyle

				if(button === 'Today') {
					buttonsStyle = {
						...style.basicButtonsStyle,
						...style.activeButtonsStyle
					}
				} else {
					buttonsStyle = {
						...style.basicButtonsStyle,
						...style.inactiveButtonsStyle
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
			}
									
		)

		return (
				<div style={style.headerStyle}>
					{ toggleButtons }
				</div>
			)
	}
}

export default HeaderComponent;