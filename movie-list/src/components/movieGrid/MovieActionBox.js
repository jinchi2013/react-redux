import React from 'react'
import {
  addSingleMovie
} from '../../actions'
import MovieActionLine from './MovieActionBox_styled'


const MovieActionBox = ({movie, dispatch, page}) => {

  return (
    <MovieActionLine>
      <span
        data-id='liked'
        onClick={ () => { dispatch(addSingleMovie(movie, 'liked', page)) } }
      >
        {movie.liked ? 'Liked' : 'Like'}
      </span>
      <span
        data-id='block'
        onClick={ () => { dispatch(addSingleMovie(movie, 'block', page)) } }
      >
        Block
      </span>
    </MovieActionLine>
  )
}

export default MovieActionBox
