import React from 'react'
import { preparePosterSrcLink } from '../../reducers/index'

const MovieBoxSimplified = ({movie}) => {
  return(
    <li>
      <img src={preparePosterSrcLink(movie.posterPath)} alt={movie.title} />
    </li>
  )
}

export default MovieBoxSimplified
