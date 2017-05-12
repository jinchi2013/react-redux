import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  fetchTopRated
} from '../actions'
import MovieBox from '../components/movieGrid/MovieBox'
import MovieGridsControlPanel from '../components/movieGrid/MovieGridsControlPanel'
import MoviePagination from '../components/movieGrid/MoviePagination'

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
      moviesList: {
        isRequesting,
        json: {
          page,
          totalPages,
          totalResults,
          results: arrayOfMovies
        }
      }
    } = this.props

    return(
      <MoviesSection>
        <MovieGridsControlPanel />
        <MoviePagination
          page={page}
          totalPages={totalPages}
          totalResults={totalResults}
        />
        <ul>
          {
            isRequesting === 0 ? 'Loading...' :
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
