import React, { Component } from 'react'
import Todo from './Todo'
import SearchTodoList from './SearchTodoList'
import { convertCase } from '../utils'

class TodoList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      todoList: this.props.todoList
    }

    this.searchTodoList = this.searchTodoList.bind(this)
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      todoList: nextProps.todoList
    })
  }

  searchTodoList(string) {
    const refineString = convertCase('lower', string)
    this.setState(state => ({
      todoList: this.props.todoList.filter( todo => convertCase('lower', todo.content).indexOf(refineString) !== -1 )
    }))
  }

  render() {
    const {
      props:{
        deleteTodo,
        updateSingleTodo,
        toggleFinishedMarker,
        sortTheTodoListByPriority
      },
      state: {
        todoList
      },
      searchTodoList
    } = this

    return (
      <section>
        <SearchTodoList searchTodoList={searchTodoList} />
        <ul>
          {
            todoList.map( (todo, index) => (
              <Todo
                index={index} key={todo.id}
                todo={todo}
                deleteTodo={()=> deleteTodo(todo.id) }
                updateSingleTodo={updateSingleTodo(index, todo.id)}
                toggleFinishedMarker={() => toggleFinishedMarker(index)}
                sortTheTodoListByPriority={sortTheTodoListByPriority(index)}
              />))
          }
        </ul>
      </section>
    )
  }
}

export default TodoList
