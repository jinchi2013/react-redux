import React, { Component } from 'react'
import TodoList from './components/TodoList'
import InputTodoField from './components/InputTodoField'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todoList:[]
    }

    this.addNewTodo = this.addNewTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.updateSingleTodo = this.updateSingleTodo.bind(this)
    this.toggleFinishedMarker = this.toggleFinishedMarker.bind(this)
  }

  addNewTodo(todo) {
    const copy = this.state.todoList.slice(0)
    copy.push(todo)
    this.setState({
      todoList: copy
    })
  }

  deleteTodo(id) {
    this.setState(state => ({
      todoList: state.todoList.filter( todo => todo.id !== id )
    }))
  }

  updateSingleTodo(index, id) {
    return content=>{
      const copy = this.state.todoList.slice(0)
      copy[index].content = content
      this.setState({
        todoList: copy
      })
    }
  }

  toggleFinishedMarker(index) {
    const copy = this.state.todoList.slice(0)
    copy[index].isFinished = !copy[index].isFinished
    this.setState({
      todoList: copy
    })
  }

  render() {

    const {
      state:{
        todoList
      },
      addNewTodo,
      deleteTodo,
      updateSingleTodo,
      searchTodoList,
      toggleFinishedMarker
    } = this

    return (
      <main>
        {
          todoList.length === 0 ?
            <h2>No Todos here...</h2> :
            <TodoList
              todoList={todoList}
              deleteTodo={deleteTodo}
              updateSingleTodo={updateSingleTodo}
              toggleFinishedMarker={toggleFinishedMarker}
            />
        }
        <InputTodoField addNewTodo={addNewTodo} />
      </main>
    )
  }
}

export default App
