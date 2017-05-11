import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  toggleMeun
} from '../actions'
import MenuWrapper from './MenuPanel_styled'



class MenuPanel extends Component {
  render() {
    const { isMenuOpen } = this.props.menuActionState
    return (
      <MenuWrapper isMenuOpen={isMenuOpen}>
        <div onClick={this.props.toggleMeun}>
          <h2>This is nav menu</h2>
        </div>
      </MenuWrapper>
    )
  }
}

const masStateToProps = state => {
  const { menuActionState } = state.actionsState

  return {
    menuActionState
  }
}

export default connect(
  masStateToProps,
  {
    toggleMeun
  }
)(MenuPanel);
