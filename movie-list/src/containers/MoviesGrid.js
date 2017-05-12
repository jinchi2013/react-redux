import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  fetchTopRated
} from '../actions'
import MovieBox from '../components/movieGrid/MovieBox'
import MovieGridsControlPanel from '../components/movieGrid/MovieGridsControlPanel'

const MoviesSection = styled.section`
  ul {
    padding: 0;
  }
`

class MoviesGrid extends Component {

  componentDidMount() {
    this.props.fetchTopRated()
  }

  render() {
    const {
      isRequesting,
      json: {
        page,
        totalPages,
        totalResults,
        results: arrayOfMovies
      }
    } = this.props.moviesList
    return(
      <MoviesSection>
        <MovieGridsControlPanel />
        <ul>
          {
            arrayOfMovies.map( movie => <MovieBox key={movie.id} movie={movie} /> )
          }
        </ul>
      </MoviesSection>
    )
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
    fetchTopRated
  }
)(MoviesGrid);
