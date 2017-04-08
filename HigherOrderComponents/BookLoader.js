import react, { Component } from 'react'
import bookJson from './bookJson'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const loadBook = () => (WrappedComponent) => {
	class BookLoader extends Component {
		constructor(props) {
			super(props)
			this.state = {
				book: null
			}
		}

		componentDidMount() {
			this.setState((state) => ({
				...bookJson
			}))
		}

		render() {
			const { book } = this.state
			if(!book) return <div>Loading...</div>
			return <WrappedComponent book={book} {...this.props} />
		}
	}

	// It’s nice to set the displayName property on the HOC 
	// so when you look at the element in the React inspector, 
	// it’s clear what it is and what it wraps.

	BookLoader.displayName = `BookLoader(${getDisplayName(WrappedComponent)})`

	return BookLoader
}

export default loadBook

// Now let's rewrite BookDetails and BookSummary

const BookDetails = ({ book }) => (
	<div>
		<img src={book.coverImg} />
		<div>{book.author}</div>
		<div>{book.title}</div>
	</div>
)

export default loadBook()(BookDetails)

const BookSummary = ({ book }) => (
	<div>{book.summary}</div>
)

export default BookSummary
