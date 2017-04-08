/**
	A typical HOC will follow this pattern
*/

function myHOC(){

	return function(WrappedComponent) {
		// It creates a new wrappercomponent
		class TheHOC extends React.Component {
			render() {
				// And it renders the component it was given
				return <WrappedComponent {...this.props}/>;
			}
		}

		// Remember: it takes a component and returns a new component
    // Gotta return it here.
    return TheHOC;
	}
}

/*
	A higher-order component transforms a component into another component

	Such as Redux's connect and Relay's createContainer

*/

/*
	Components are the primary unit of code reuse in React.
	However, you'll find that some pattern aren't a strightforward fit for 
	traditional components
*/

/*
	For example, say you have a CommentList component that subscribles to an external data
	source to render a list of comments
*/

import React, {Component} from 'react'
import DataSource from './DataSource'

class CommentList extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			comments: DateSource.getComments()
		}
	}

	componentDidMount() {
		DataSource.addChangeListener(this.handleChange)
	}

	componentWillUnmount() {
		DataSource.removeChangeListener(this.handleChange)
	}

	handleChange() {
		this.setState({
			comments: DateSource.getComments()
		})
	}

	render() {
		return (
			<div>
				{
					this.state.comments.map((comment) => (
						<Comment comment={comment} key={comment.id} />
					))
				}
			</div>
		)
	}
}

/*
	Later, we have another component for subscribing to a single blog post, which follows a similar pattern:
*/

class BlogPost extends Componet {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			blogPost: DataSource.getBlogPost(props.id)
		}
	}

	componentDidMount() {
		DataSource.addChangeListener(this.handleChange)
	}

	componentWillUnmount() {
		DataSource.removeChangeListener(this.handleChange)
	}

	handleChange() {
		this.setState({
			blogPost: DataSource.getBlogPost(props.id)
		})
	}

	render() {
		return (
			<TextBook text={this.state.blogPost} />
		)
	}
}

/*
	CommentList and BlogPost aren't identical --- they call different methods on DataSource
	and they render different output. But much of their implementation is the same:

	1. on mount, add a change listener to DataSource
	2. Inside the listener, call setState whenever the data source changes
	3. on unmount, remove the change listener

*/

/*
	We can write a function that creates components, like CommentList and BlogPost, that subscribe to 
	DataSource, which will accept as one of its arguments a child componet that receives the subscribed data as a 
	prop.
*/

const withSubscription = () => (WrappedComponent, selectData) => {
	class WithSubscription extends Component {
		constructor(props) {
			super(props)
			this.handleChange = this.handleChange.bind(this)
			this.state = {
				data: selectData(DataSource, props)
			}
		}

		componentDidMount() {
			DataSource.addChangeListener(this.handleChange)
		}

		componentWillUnmount() {
			DataSource.removeChangeListener(this.handleChange)
		}
		render() {
			return <WrappedComponent data={data} {...this.props} />
		}

	}

	return WithSubscription
}

/*
	And then we can simplify our CommentList and Blog post component as following
*/

const CommentList = ({data}) => (
	<div>
		{
			data.map((comment) => (
				<Comment comment={comment} key={comment.id} />
			))
		}
	</div>
)

const BlogPost = ({data}) => (
	<TextBook text={data.blogPost} />
)

/*
	then export them by calling withSubscription HOC with component and data as params

*/

export default withSubscription()(
	CommentList,
	(DataSource) => DataSource.getComments()
)

export default withSubscription()(
	BlogPost,
	(DataSource, props) => DataSource.getBlogPost(props.id)
)

/*
	Never mutate the Original Component.
	HOC use composition, by wrapping the input component
*/




















