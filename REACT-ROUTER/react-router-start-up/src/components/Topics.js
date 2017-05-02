import React from 'react'
import {
	Route,
	Link
} from 'react-router-dom'

const Topic = ({match})=>(
		<div>
			<h3>{match.params.topicId}</h3>
		</div>
	)

const Topics = ({match})=>(
		<nav>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to={`${match.url}/rendering`}>
						Rendering with React
					</Link>
				</li>
				<li>
					<Link to={`${match.url}/components`}>
						Components
					</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>
						Props vs State
					</Link>
				</li>
			</ul>

			<Route path={`${match.url}/:topicId`} component={Topic} />
			<Route exact path={match.url}
				render={()=>(
						<h3>Please select a topic.</h3>
					)}
			/>
		</nav>
	)

export default Topics
