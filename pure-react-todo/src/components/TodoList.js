import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    const {
      todoList,
      deleteTodo
    } = this.props

    return (
      <section>
        <ul>
          {
            todoList.map( todo => (<Todo key={todo.id} todo={todo} deleteTodo={()=> deleteTodo(todo.id) } />) )
          }
        </ul>
      </section>
    )
  }
}

export default TodoList
