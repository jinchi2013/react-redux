import React, { Component } from 'react'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: props.todo.content,
      isEdit: false
    }

    this.updateContent = this.updateContent.bind(this)
  }

  updateContent(e) {
    if(e.keyCode === 13) {

    }
    const newContent = e.target.value

  }

  render() {
    const {
      props:{
        deleteTodo,
        todo
      },
      state:{
        content,
        isEdit
      },
      updateContent
    } = this

    const style={
      display: isEdit ? 'inline-block' : 'none'
    }

    return (
      <li>
        <input
          value={this.state.content}
          onChange={updateContent}
          style={style}
        />
          { todo.content }
        <button onClick={toggle}>
          {
            isEdit ? 'Done' : 'Edit'
          }
        </button>
        <button style={style}>Cancel</button>
        <button onClick={deleteTodo}>Delete</button>
      </li>
    )
  }
}

export default Todo
