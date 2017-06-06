import React from 'react'

const TaggingButton = ({taggingFilterTodoList, tag, active}) => {
  const liStyle = {
    display: 'inline-block',
    margin: '0 5px 0 5px',
    cursor: 'pointer',
    color: tag === active ? 'red' : 'black'
  }

  return(
    <li onClick={() => taggingFilterTodoList(tag)} style={liStyle} >{tag}</li>
  )
}

export default TaggingButton
