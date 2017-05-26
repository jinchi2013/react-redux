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
    this.props.dispatch(fetchTopRated())
  }

  render() {
    const {
      isRequesting,
      page,
      totalPages,
      totalResults,
      arrayOfMovies,
      dispatch
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
            isRequesting === true ? <li style={{"display":"block"}}>Loading...</li> :
            arrayOfMovies.map( movie => <MovieBox page={page} key={movie.id} movie={movie} dispatch={dispatch} /> )
          }
        </ul>
      </MoviesSection>
    )
  }
}

const masStateToProps = state => {
  const {
    moviesList : {
      isRequesting,
      json: {
        page,
        totalPages,
        totalResults,
        results : arrayOfMovies
      }
    }
  } = state.topRatedMovies

  return {
    isRequesting,
    page,
    totalPages,
    totalResults,
    arrayOfMovies: arrayOfMovies
  }
}

export default connect(
  masStateToProps
)(MoviesGrid);
