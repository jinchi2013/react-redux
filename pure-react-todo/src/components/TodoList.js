import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    const {
      todoList,
      deleteTodo,
      updateSingleTodo
    } = this.props

    return (
      <section>
        <ul>
          {
            todoList.map( (todo, index) => (
              <Todo
                index={index} key={todo.id}
                todo={todo}
                deleteTodo={()=> deleteTodo(todo.id) }
                updateSingleTodo={updateSingleTodo(index, todo.id)}
              />) )
          }
        </ul>
      </section>
    )
  }
}

export default TodoList
