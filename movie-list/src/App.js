import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  toggleMeun
} from './actions'

import MenuPanel from './components/MenuPanel/MenuPanel'
import MoviesGrid from './containers/MoviesGrid'


const MainApp = styled.main`
  width: 425px;
  height: 100%;
  text-align: center;
`

class App extends Component {

  _handleClick(e){
    e.preventDefault()

    const {
      dispatch
    } = this.props

    dispatch(toggleMeun())
  }

  render() {
    return (
      <MainApp>
        <MenuPanel />
        <header>
          <h1 onClick={this._handleClick.bind(this)}>Our Top Rated Movies List</h1>
        </header>
        <MoviesGrid />
        <footer></footer>
      </MainApp>
    );
  }
}

export default connect()(App);
