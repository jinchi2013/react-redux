import React, {Component} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import EnhanceSimplifiedMovieBox from '../HOCs/EnhanceSimplifiedMovieBox'
import MovieBoxSimplified from '../components/movieGrid/MovieBox_simplified'
import block from '../images/block.png'

import { getSelectdMovieLists } from '../reducers/topRatedMovies'
import { addMovieToAnotherList, removeMovieFromCurrentList } from '../actions'

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
      addMovieToAnotherList, removeMovieFromCurrentList
    } = this.props

    return (
      <SectionWrapper>
        <h3>Movie List Of Liked</h3>
        <ul>
          {
            likedLists.length === 0 ?
              <li>Your Liked List is empty</li> :
              likedLists.map( movie => {
                const config = {
                  addMovieToAnotherList: function() {
                    addMovieToAnotherList(movie, 'liked')
                  },
                  removeMovieFromCurrentList: function() {
                    removeMovieFromCurrentList(movie.id, 'liked')
                  },
                  movie: movie,
                  addToAnotherIcon: block
                }

                const EnhancedMovieBox = EnhanceSimplifiedMovieBox(config)(MovieBoxSimplified)

                return <EnhancedMovieBox key={movie.id} />
              })
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

export default connect(
  mapStateToProps,
  {
    addMovieToAnotherList,
    removeMovieFromCurrentList
  }
)(MovieListOfLiked)
