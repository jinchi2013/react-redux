import React, { Component } from 'react'
import Todo from './Todo'
import SearchTodoList from './SearchTodoList'
import FilterTodoListBar from './FilterTodoListBar'
import { convertCase } from '../utils'

class TodoList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      todoList: this.props.todoList,
      taggingFilter: ['All', 'Processing', 'Done'],
      active: 'All'
    }

    this.searchTodoList = this.searchTodoList.bind(this)
    this.taggingFilterTodoList = this.taggingFilterTodoList.bind(this)
  }

  componentWillReceiveProps(nextProps){
    this.taggingFilterTodoList(this.state.active, nextProps.todoList)
  }

  searchTodoList(string) {
    const refineString = convertCase('lower', string)
    this.setState(state => ({
      todoList: this.props.todoList.filter( todo => convertCase('lower', todo.content).indexOf(refineString) !== -1 )
    }))
  }

  taggingFilterTodoList(string, todoList=this.props.todoList) {
    switch (string) {
      case 'All':
        return this.setState({
          todoList: todoList,
          active: 'All'
        })
      case 'Processing':
        return this.setState({
          todoList: todoList.filter( todo => !todo.isFinished ),
          active: 'Processing'
        })
      case 'Done':
        return this.setState({
          todoList: todoList.filter( todo => todo.isFinished ),
          active: 'Done'
        })
      default:
        return false
    }
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
        active,
        todoList,
        taggingFilter
      },
      searchTodoList,
      taggingFilterTodoList
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
                deleteTodo={()=> deleteTodo(todo.id)}
                updateSingleTodo={updateSingleTodo(index, todo.id)}
                toggleFinishedMarker={() => toggleFinishedMarker(index)}
                sortTheTodoListByPriority={sortTheTodoListByPriority(index)}
              />))
          }
        </ul>
        <FilterTodoListBar
          taggingFilter={taggingFilter}
          taggingFilterTodoList={taggingFilterTodoList}
          active={active}
        />
      </section>
    )
  }
}

export default TodoList
