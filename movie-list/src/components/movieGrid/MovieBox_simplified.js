import React from 'react'
import { preparePosterSrcLink } from '../../reducers/index'
import styled from 'styled-components'

import block from '../../images/block.png'
import remove from '../../images/remove.png'
import detail from '../../images/detail.png'

const WrapperLi = styled.li`
  width: 230px;
  padding: 5px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    transform: none;
    will-change: transform;
    transition: all 300ms ease-in;
  }

  div {
    position: absolute;
    bottom: 20px;
    left: 10px;
    transform: translateY(150%);
    will-change: transform;
    transition: all 300ms ease-in;

    span {
      display: inline-block;
      width: 50px;
      height: 50px;
      margin: 0 5px 0 0;
      cursor: pointer;
    }

    span[data-id='remove'] {
      background: url(${remove});
      background-size: 50px 50px;
    }
    span[data-id='block'] {
      background: url(${block});
      background-size: 50px 50px;
    }

    span[data-id='view'] {
      background: url(${detail});
      background-size: 50px 50px;
    }
  }

  &:hover {
    img {
      transform: translateY(-20%);
    }

    div {
      transform: none;
    }
  }
`

const MovieBoxSimplified = ({movie, addLikedMovieToBlock}) => {
  return(
    <WrapperLi>
      <img src={preparePosterSrcLink(movie.posterPath)} alt={movie.title} />
      <div>
        <span data-id='remove'></span>
        <span data-id='block' onClick={()=>{ addLikedMovieToBlock() }}></span>
        <span data-id='view'></span>
      </div>
    </WrapperLi>
  )
}

export default MovieBoxSimplified
