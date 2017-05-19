import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  toggleMeun
} from '../../actions'
import MenuWrapper from './MenuPanel_styled'
import {
	Link
} from 'react-router-dom'


class MenuPanel extends Component {
  render() {
    const { isMenuOpen } = this.props.menuActionState
    return (
      <MenuWrapper isMenuOpen={isMenuOpen}>
        <div>
          <button onClick={this.props.toggleMeun}>X</button>
          <ul>
            <li><Link to="/">Movies List</Link></li>
            <li><Link to="/MoviesOfWatchLater">Watch Later List</Link></li>
          </ul>
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
