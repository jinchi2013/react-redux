import React, { Component } from 'react'

const EnhanceSimplifiedMovieBox = config => MovieBoxSimplified => {
  class WithConfig extends Component {
    render() {
      return (
        <MovieBoxSimplified config={config} />
      )
    }
  }

  return WithConfig
}

export default EnhanceSimplifiedMovieBox
