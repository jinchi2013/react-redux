import React, { Component, PropTypes } from 'react'
import FooterContainer from './FooterContainer'

class MainLayoutContainer extends Component {
  static propTypes = {
      history   : PropTypes.object,
      dispatch  : PropTypes.func,
      location  : PropTypes.object,
      params    : PropTypes.object,
      children  : PropTypes.object
  }

  render () {
    const { children } = this.props
    return (
      <div>
        <div>
          {children}
        </div>
        <footer
          id='global__footer'
          className='global__footer'
          role='contentinfo'
        >
          <FooterContainer />
        </footer>
      </div>
    )
  }
}

export default MainLayoutContainer