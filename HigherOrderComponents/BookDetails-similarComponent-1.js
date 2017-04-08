import React, {Component} from 'react'
import bookJson from './bookJson'

class BookDetail extends Component {
	constructor (props) {
		super(props)
		this.state = {
			book: null
		}
	}

	componentDidMoint() {
		this.setState((state)=>({
			...bookJson
		}))
	}

	render() {

		const {book} = this.state

		if(!book) return <div>Loading...</div>

		return (
			<div>
				<img src={book.coverImg} />
				<div>{book.author}</div>
				<div>{book.title}</div>
			</div>
		)
	}
}

export default BookDetail