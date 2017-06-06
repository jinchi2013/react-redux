import React, { Component } from 'react'
import TaggingButton from './TaggingButton'

class FilterTodoListBar extends Component {
  render() {
    const {
      props: {
        active,
        taggingFilter,
        taggingFilterTodoList
      }
    } = this

    return(
      <ul>
        {
          taggingFilter.map( (tag, index) => (
            <TaggingButton
              tag={tag}
              taggingFilterTodoList={taggingFilterTodoList}
              key={index}
              active={active}
            />))
        }
      </ul>
    )
  }
}

export default FilterTodoListBar
