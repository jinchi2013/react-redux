import React from 'react'

const SearchTodoList = ({searchTodoList}) => {
  function handleOnChange(e) {
    searchTodoList(e.target.value)
    console.log('typeof e.target.value', typeof e.target.value)
  }

  return (
    <input
      placeholder='Search the Todo List...'
      onChange={handleOnChange}
    />
  )
}

export default SearchTodoList
