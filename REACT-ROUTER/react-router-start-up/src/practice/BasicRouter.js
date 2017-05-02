import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import Accounts from './Accounts'
import Topics from '../components/Topics'

const Home = () => (
		<nav>
			<h2>Home</h2>
		</nav>
	)

const About = ()=>(
		<nav>
			<h2>About</h2>
		</nav>
	)

const BasicExample = ()=>(
		<Router>
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/topics">Topics</Link></li>
					<li><Link to="/accounts">Accounts</Link></li>
				</ul>

				<hr/>

				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/topics" component={Topics} />
				<Route path="/accounts" component={Accounts} />
			</div>
		</Router>
	)

export default BasicExample
