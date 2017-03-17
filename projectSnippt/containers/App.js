import React, { Component, PropTypes } from 'react'
import { initialize, navigate } from '../utils/webTracking'

class App extends Component {
  static propTypes = {
    location : PropTypes.object,
    routes   : PropTypes.array,
    children : PropTypes.object,
    history  : PropTypes.object
  }

  componentDidMount () {
    initialize()

    navigate({
      page  : this.props.location.pathname
    })
  }

  componentWillReceiveProps (nextProps) {
    const currentLocation = this.props.location
    const nextLocation = nextProps.location
    const isPathnameChanged = currentLocation.pathname !== nextLocation.pathname

    if (isPathnameChanged) {
      navigate({
        page  : nextLocation.pathname
      })
    }
  }

  render () {
    return (
      <div id='app-view'>
        {this.props.children}
      </div>
    )
  }
}

export default App