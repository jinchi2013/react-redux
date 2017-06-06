import React, { Component } from 'react'
import PriorityInputEachTodo from './PriorityInputEachTodo'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: props.todo.content,
      isEdit: false
    }

    this.updateContent = this.updateContent.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.updateSingleTodo = this.updateSingleTodo.bind(this)
  }

  updateContent(e) {
    this.setState({
      content: e.target.value
    })
  }

  toggleEdit(e) {
    if(this.state.isEdit) {
      this.setState({
        content: this.props.todo.content
      })
    }
    this.setState(state => ({
      isEdit: !state.isEdit
    }))
  }

  updateSingleTodo(e) {
    this.setState(state => ({
        isEdit: !state.isEdit
      }))

    this.props.updateSingleTodo(this.state.content)
  }

  render() {
    const {
      props:{
        deleteTodo,
        todo,
        toggleFinishedMarker,
        sortTheTodoListByPriority
      },
      state:{
        isEdit
      },
      updateContent,
      toggleEdit,
      updateSingleTodo
    } = this

    const editMode={
      display: isEdit ? 'inline-block' : 'none'
    }

    const contentStyle={
      textDecoration: todo.isFinished ? 'line-through': 'none',
      cursor: 'pointer',
      color: todo.isFinished ? 'gray': 'black',
      padding: 8,
      display: 'inline-block'
    }

    return (
      <li>
        <PriorityInputEachTodo sortTheTodoListByPriority={sortTheTodoListByPriority} priority={todo.priority} />
        <input
          value={this.state.content}
          onChange={updateContent}
          style={editMode}
        />
        <span onClick={toggleFinishedMarker} style={contentStyle}>
          { isEdit ? null : todo.content }
        </span>
        <button onClick={toggleEdit}>{ isEdit ? 'Cancel' : 'Edit' }</button>
        <button onClick={updateSingleTodo} style={editMode}>Save</button>
        <button onClick={deleteTodo}>Delete</button>
      </li>
    )
  }
}

export default Todo
