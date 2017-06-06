import React from 'react'

const SearchTodoList = ({searchTodoList}) => {
  function handleOnChange(e) {
    searchTodoList(e.target.value)
  }

  return (
    <input
      placeholder='Search the Todo List...'
      onChange={handleOnChange}
    />
  )
}

export default SearchTodoList
