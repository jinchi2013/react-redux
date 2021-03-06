import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { toggleMeun } from '../../actions'
import MenuWrapper from './MenuPanel_styled'

class MenuPanel extends Component {
  render() {
    const { isMenuOpen } = this.props.menuActionState
    const navInfo = {
      'Home Page': '',
      'Movies List': 'MoviesGrid',
      'Movie List Of Liked': 'MovieListOfLiked',
      'Movie List Of Blocked': 'MovieListOfBlocked'
    }

    return (
      <MenuWrapper isMenuOpen={isMenuOpen}>
        <div>
          <button onClick={this.props.toggleMeun}>Close</button>
          <ul>
            {
              Object.keys(navInfo).map( (label, index) => <li key={label} onClick={this.props.toggleMeun}><Link to={`/${navInfo[label]}`}>{label}</Link></li> )
            }
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
