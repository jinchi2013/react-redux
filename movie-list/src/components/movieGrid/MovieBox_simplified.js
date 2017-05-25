import React from 'react'
import { preparePosterSrcLink } from '../../reducers/index'
import styled from 'styled-components'

const WrapperLi = styled.li`
  width: 230px;
  padding: 5px;
  overflow: hidden;

  img {
    width: 100%;
    transform: none;
    will-change: transform;
    transition: all 300ms ease-in;
  }

  &:hover {
    img {
      transform: translateY(-20%);
    }
  }
`

const MovieBoxSimplified = ({movie}) => {
  return(
    <WrapperLi>
      <img src={preparePosterSrcLink(movie.posterPath)} alt={movie.title} />
    </WrapperLi>
  )
}

export default MovieBoxSimplified
