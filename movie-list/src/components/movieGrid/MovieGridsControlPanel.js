import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { sortArrayByField } from '../../actions'

const ControlPanelWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-around;

  button {
    text-align: center;
    background-color: #3498db;
    height: 30px;
    color: white;
    border: 0;
  }
`

class MovieGridsControlPanel extends Component {
  state={
    title: false,
    voteCount: false,
    voteAverage: false,
    releaseDate: false
  }

  _handleClick(e) {
    const field = e.target.getAttribute('data-id')
    this.props.dispatch(sortArrayByField(field, this.state[field]))
    this.setState(state => ({
      [field]:!state[field]
    }))

  }

  render() {
    const filterFields = [ 'title', 'voteCount', 'voteAverage', 'releaseDate' ]
    return (
      <ControlPanelWrapper>
        {
          filterFields.map( (field, i) => <button key={i} data-id={field} onClick={this._handleClick.bind(this)}>{field.toUpperCase()}</button>)
        }
      </ControlPanelWrapper>
    )
  }
}

export default connect()(MovieGridsControlPanel)