import React from 'react'
import TodoFactory from '../APIs'

const InputTodoField = ({addNewTodo}) => {

  function handleOnKeyUp(e) {
    if(e.keyCode === 13) {
      const content = e.target.value
      const todo = TodoFactory(content)
      addNewTodo(todo)
      e.target.value = ''
    }
  }

  return (
    <input name='input' onKeyUp={ handleOnKeyUp } />
  )
}

export default InputTodoField
