import React from 'react'
import TodoFactory from '../APIs'

const InputTodoField = ({addNewTodo}) => {

  function handleOnKeyUp(e) {
    if(e.keyCode === 13) {
      const content = e.target.value

      if( content.trim() !== '' ) {
        const todo = TodoFactory(content)
        addNewTodo(todo)
      } else {
        window.alert('Empty input!')
      }
      e.target.value = ''
    }
  }

  return (
    <input
      name='input'
      onKeyUp={ handleOnKeyUp }
      placeholder='Add New Todo Item...'
    />
  )
}

export default InputTodoField
