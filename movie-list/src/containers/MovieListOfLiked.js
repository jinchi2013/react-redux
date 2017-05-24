import React, {Component} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import MovieBoxSimplified from '../components/movieGrid/MovieBox_simplified'

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

  img {
    width: 100%
  }
`

class MovieListOfLiked extends Component {
  render() {
    const {
      idArr,
      idMap
    } = this.props

    return (
      <SectionWrapper>
        <h3>MovieListOfLiked</h3>
        <ul>
          {
            idArr.length === 0 ?
              <li>Your Liked List is empty</li> :
              idArr.map( id => <MovieBoxSimplified movie={idMap[id]} key={id} />)
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
    idArr,
    idMap
  }
}

export default connect(mapStateToProps)(MovieListOfLiked)
