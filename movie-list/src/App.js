import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  withRouter
} from 'react-router-dom'

import {
  toggleMeun
} from './actions'

import Routes from './Routes'
import MenuPanel from './components/MenuPanel/MenuPanel'

const MainApp = styled.main`
	background: hsl(49, 83%, 91%);
	padding: 0 10px;
	width: 500px;
  min-height: 100vh;
  text-align: center;
	box-sizing: border-box;

  h1 {
    font-family: cursive;
  }
`

class App extends Component {

  _handleClick(e){
    e.preventDefault()

    this.props.dispatch(toggleMeun())
  }

  render() {
    return (
      <MainApp>
        <MenuPanel />
        <header>
          <h1 onClick={this._handleClick.bind(this)}>Our Top Rated Movies List</h1>
        </header>
				<Routes />
        <footer></footer>
      </MainApp>
    );
  }
}

export default withRouter(connect()(App))
