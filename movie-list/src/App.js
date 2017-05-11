import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchTopRated
} from './actions'

class App extends Component {

  componentDidMount(){
    this.props.fetchTopRated()
  }

  render() {
    console.log(this.props.moviesList)
    return (
      <div>
        Let us start here!
      </div>
    );
  }
}

const masStateToProps = state => {
  const { moviesList } = state.topRatedMovies

  return {
    moviesList
  }
}

export default connect(
  masStateToProps,
  {
    fetchTopRated
  }
)(App);
