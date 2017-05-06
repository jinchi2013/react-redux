import React from 'react'
import {
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const AuthButton = withRouter( ({ history }) => (
  window.localStorage.getItem('auth') === 'true' ? (
    <p>
      Welcome! <button onClick={() => {
        setTimeout(()=>{
          window.localStorage.setItem('auth', 'false')
          history.push('/')
        }, 100)
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
) )

const PrivateRoute = ({ component: Component, object, ...rest }) => {
  return(
    <Route {...rest} render={props => (
      window.localStorage.getItem('auth') === 'true' ? (
        <Component {...props} object={object} />
      ) : (
        <Redirect to={{
          pathname: "/login",
          state: { from: props.location }
        }}/>
      )
    )}/>
)}

const Protected = ({object}) => {
  console.log(object)
  return <h3>Protected</h3>
}

const AuthPractice = ({match})=>(
  <div>
    <AuthButton />
    <ul>
      <li><Link to={`${match.url}/protected`}>Protected Page</Link></li>
    </ul>

    <PrivateRoute path={`${match.url}/protected`} component={Protected} object={{a:1,b:2}} />
  </div>
)

export default AuthPractice
