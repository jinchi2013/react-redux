import React, {Component} from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import Accounts from './Accounts'
import Topics from '../components/Topics'
import AuthPractice from './AuthPractice'

import Login from '../components/Login'

const Home = () => (
		<nav>
			<h2>Home</h2>
		</nav>
	)

class BasicRouter extends Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/topics">Topics</Link></li>
						<li><Link to="/accounts">Accounts</Link></li>
						<li><Link to="/AuthPractice">Authentication Practice</Link></li>
					</ul>

					<hr/>

					<Route exact path="/" component={Home} />
					<Route path="/topics" component={Topics} />
					<Route path="/accounts" component={Accounts} />
					<Route path="/AuthPractice" component={AuthPractice} />

					<Route path="/login" component={Login}/>
				</div>
			</Router>
		)
	}
}

export default BasicRouter
