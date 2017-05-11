import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchTopRated,
  toggleMeun
} from './actions'

import MenuPanel from './components/MenuPanel'
import styled from 'styled-components'

const MainApp = styled.main`
  width: 425px;
  height: 100%;
  text-align: center;
`

class App extends Component {

  componentDidMount(){
    this.props.fetchTopRated()
  }

  render() {
    return (
      <MainApp>
        <MenuPanel />
        <header>
          <h1 onClick={this.props.toggleMeun}>This is the header!!</h1>
        </header>
        <section></section>
        <footer></footer>
      </MainApp>
    );
  }
}

const masStateToProps = state => {
  const { moviesList } = state.topRatedMovies

  return {
    moviesList,
  }
}

export default connect(
  masStateToProps,
  {
    fetchTopRated,
    toggleMeun
  }
)(App);
