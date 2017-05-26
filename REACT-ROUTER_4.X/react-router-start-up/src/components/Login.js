import React, {Component} from 'react'
import {
  Redirect,
} from 'react-router-dom'

class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  login () => {
    setTimeout(()=>{
      window.localStorage.setItem('auth', 'true')
      this.setState({ redirectToReferrer: true })
    }, 100)
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log In</button>
      </div>
    )
  }
}

export default Login
