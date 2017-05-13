import React from 'react'
import styled from 'styled-components'
import StyledHeartSvg from '../utils/Styled_heart_svg'

const MovieLi =  styled.li`
  list-style-type: none;
  font-family: fantasy;
  margin-top: 10px;

  img {
    width: 65%;
  }

  h4 {
    span[data-title='title'] {
      vertical-align: super;
    }
  }

  div[data-desc='overview'] {
    padding-top: 5px;
    text-align: justify;
  }
`

const preparePosterSrcLink = posterPath => `https://image.tmdb.org/t/p/w500${posterPath}`

const MovieBox = ({ movie:{title, overview, releaseDate, posterPath, voteAverage, voteCount}}) => {
  return(
    <MovieLi>
      <img src={preparePosterSrcLink(posterPath)} alt={title} />
      <h4>
        <StyledHeartSvg>
          <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </StyledHeartSvg>
        <span data-title='title'>{title}</span>
      </h4>
      <section>
        <div data-desc='releaseDate'>
          <span>Release Date: {releaseDate}</span>
        </div>
        <div data-desc='vote'>
          <span>Vote Count: {voteCount} | Average Score: {voteAverage}/10</span>
        </div>
        <div data-desc='overview'>
          { overview }
        </div>
      </section>
    </MovieLi>
  )
}

export default MovieBox
