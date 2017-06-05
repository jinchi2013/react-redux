import React from 'react'
import TodoFactory from '../APIs'

const InputTodoField = ({addNewTodo}) => {

  function handleOnKeyUp(e) {
    if(e.keyCode === 13) {
      const content = e.target.value

      if( content !== '' ) {
        const todo = TodoFactory(content)
        addNewTodo(todo)
        e.target.value = ''
      } else {
        window.alert('Empty input!')
      }
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
