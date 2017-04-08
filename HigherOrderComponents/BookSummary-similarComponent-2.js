import React, { Component } from 'react'
import bookJson from './bookJson'

class BookSummary extends Component {
	constructor(props){
		super(props)
		this.state = {
			book: null
		}
	}

	componentDidMount(){
		this.setState((state)=>{
			...bookJson
		})
	}

	render(){
		const { book } = this.state

		if(!book) return <div>Loading...</div>

		return (<div>{book.summary}</div>)
	}
}

export default BookSummary
