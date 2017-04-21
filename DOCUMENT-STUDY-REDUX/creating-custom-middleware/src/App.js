import React, { Component } from 'react'
import { connect } from 'react-redux'
import { middlewareAction, metaDelay } from './actions'
//import { timeoutScheduler } from './middlewares'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //this.props.middlewareAction()
    const cancel = this.props.metaDelay()
    cancel() // this will cancel the settimeout function, action type will distinguish the function returned
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { middlewareState } = state

  return {
    middlewareState
  }
}

export default connect(
  mapStateToProps, 
  { middlewareAction, metaDelay }
)(App)
