import React from 'react'
import styled from 'styled-components'

import { preparePosterSrcLink } from '../../reducers/index'
import StyledHeartSvg from '../utils/Styled_heart_svg'
import MovieActionBox from './MovieActionBox'


const MovieLi =  styled.li`
  display: ${props => props.blocked ? 'none' : 'block'}
  list-style-type: none;
  font-family: fantasy;
  margin-top: 20px;

  img {
    width: 50%;
  }

  h4 {
    margin: 10px 0;

    span[data-title='title'] {
      vertical-align: super;
    }
  }

  div[data-desc='overview'] {
    padding: 5px 20px 0 20px;
    text-align: justify;
  }
`

const MovieBox = ({ movie, dispatch, page}) => {
  return(
    <MovieLi blocked={movie.block}>
      <img src={preparePosterSrcLink(movie.posterPath)} alt={movie.title} />
      <MovieActionBox page={page} movie={movie} dispatch={dispatch}  />
      <h4>
        <StyledHeartSvg>
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </StyledHeartSvg>
        <span data-title='title'>{movie.title}</span>
      </h4>
      <section>
        <div data-desc='releaseDate'>
          <span>Release Date: {movie.releaseDate}</span>
        </div>
        <div data-desc='vote'>
          <span>Vote Count: {movie.voteCount} | Average Score: {movie.voteAverage}/10</span>
        </div>
        <div data-desc='overview'>
          { movie.overview }
        </div>
      </section>
    </MovieLi>
  )
}

export default MovieBox
