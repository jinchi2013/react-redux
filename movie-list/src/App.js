import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
	Route,
  withRouter
} from 'react-router-dom'

import {
  toggleMeun
} from './actions'

import MenuPanel from './components/MenuPanel/MenuPanel'
import MoviesGrid from './containers/MoviesGrid'
import MoviesOfWatchLater from './containers/MovieListOfLiked'


const MainApp = styled.main`
	background: hsl(49, 83%, 91%);
	padding: 0 10px;
	width: 500px;
  height: 100%;
  text-align: center;
	box-sizing: border-box;
	
  h1 {
    font-family: cursive;
  }
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
        <Route exact path="/" component={MoviesGrid} />
        <Route path="/MovieListOfLiked" component={MoviesOfWatchLater} />
        <footer></footer>
      </MainApp>
    );
  }
}

export default withRouter(connect()(App))
