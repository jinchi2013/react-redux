import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  fetchTopRated
} from '../../actions'

import arrowLeft from '../../images/left-arrow.png'
import arrowRight from '../../images/right-arrow.png'

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  border-top: solid 1px gray;
  border-bottom: solid 1px gray;

  span[data-id='left'] {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url(${arrowLeft});
    background-size: 25px 25px;
    vertical-align: middle;

    &:hover {
      cursor: pointer;
    }
  }

  span[data-id='right'] {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url(${arrowRight});
    background-size: 25px 25px;
    vertical-align: middle;

    &:hover {
      cursor: pointer;
    }
  }

  span[data-id='page'] {
    position: relative;
    top: 5px;
  }
`

const MoviePagination = ( {page, totalPages, totalResults, dispatch} ) => {

  const _handleClick = (e) => {
    const directionId = e.target.getAttribute('data-id')
    const nextPageNumber = directionId === 'left' ? page - 1 : page + 1
    if(nextPageNumber > 0 && nextPageNumber <= totalPages) {
      dispatch(fetchTopRated(nextPageNumber))
    }
  }

  return(
    <PaginationWrapper>
      <span data-id='left' onClick={_handleClick}></span>
      <span data-id='page'>
        {
          `${page} / ${totalPages}`
        }
      </span>
      <span data-id='right' onClick={_handleClick}></span>
    </PaginationWrapper>
  )
}

export default connect()(MoviePagination)
