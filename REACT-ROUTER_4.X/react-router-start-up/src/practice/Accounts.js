import React from 'react'
import {
	Route,
	Link
} from 'react-router-dom'


const Child = ({match}) => (
		<div>
			<h3>ID: {match.params.id}</h3>
		</div>
	)

const ParamsPractice = ({match})=>(
		<nav>
			<h2>Accounts</h2>
			<ul>
				<li><Link to={`${match.url}/netflix`}>Netflix</Link></li>
        <li><Link to={`${match.url}/zillow-group`}>Zillow Group</Link></li>
        <li><Link to={`${match.url}/yahoo`}>Yahoo</Link></li>
        <li><Link to={`${match.url}/modus-create`}>Modus Create</Link></li>
			</ul>

			<Route path={`${match.url}/:id`} component={Child} />
		</nav>
	)

export default ParamsPractice
