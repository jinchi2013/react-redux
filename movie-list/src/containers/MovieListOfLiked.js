import React, {Component} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import MovieBoxSimplified from '../components/movieGrid/MovieBox_simplified'

import { getSelectdMovieLists } from '../reducers/topRatedMovies'
import { addLikedMovieToBlock } from '../actions'

const SectionWrapper = styled.section`
  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    text-align: initiate;

    li {
      width: 230px;
      padding: 5px;
    }
  }
`

class MovieListOfLiked extends Component {
  render() {
    const {
      likedLists,
      addLikedMovieToBlock
    } = this.props

    return (
      <SectionWrapper>
        <h3>Movie List Of Liked</h3>
        <ul>
          {
            likedLists.length === 0 ?
              <li>Your Liked List is empty</li> :
              likedLists.map( movie => <MovieBoxSimplified movie={movie} key={movie.id} addLikedMovieToBlock={() => { addLikedMovieToBlock(movie) }} />)
          }
        </ul>
      </SectionWrapper>
    )
  }
}

const mapStateToProps = state => {
  const {
    selectedMoviesList: {
      liked : {
        idArr,
        idMap
      }
    }
  } = state.actionsState

  return {
    likedLists: getSelectdMovieLists(state.topRatedMovies, idArr, idMap),
  }
}

export default connect(mapStateToProps, {addLikedMovieToBlock})(MovieListOfLiked)
