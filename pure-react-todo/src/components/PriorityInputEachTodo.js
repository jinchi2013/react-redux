import React, { Component } from 'react'

class PriorityInputEachTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      priority: this.props.priority
    }

    this.handlePriorityChange = this.handlePriorityChange.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  handlePriorityChange(e) {
    if(e.keyCode === 13 || e.type === 'blur') {
      const val = this.state.priority
      if(val !== this.props.priority && val.trim() !== '') {
        this.props.sortTheTodoListByPriority(parseInt(val))
      } else {
        window.alert('Number is required...')
      }
    }
  }

  changeHandler (e) {
    this.setState({
      priority: e.target.value
    })
  }

  render() {
    const {
      state: {
        priority
      },
      handlePriorityChange,
      changeHandler
    } = this

    return(
      <input type='number' value={priority} onBlur={handlePriorityChange} onChange={changeHandler} onKeyUp={handlePriorityChange} />
    )
  }
}

export default PriorityInputEachTodo
