import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { getAllProducts } from '../reducers/products'
import { addToCart } from '../actions'

import ProductItem from '../components/ProductItem'
import Spinner from '../components/utilityComponents/Spinner'

const ProductsList = ({products, isRequesting, addToCart}) => {
	const style={
		marginTop: 20
	}

	return (
		<section style={style}>
			{
				!isRequesting ? 
					products.map(product => (
						<ProductItem
							key={product.id}
							product={product}
							addToCart={() => addToCart(product.id) }
						/>
					)) :
					<Spinner/>
			}
		</section>
	)
}

ProductsList.PropTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			imgSrc: PropTypes.string.isRequired,
			itemName: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			quantityRemaining: PropTypes.number.isRequired
		})
	).isRequired,
	addToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	const { 
		isRequesting
	} = state.products.productsIdMap

	return {
		products: getAllProducts(state.products),
		isRequesting
	}
}
	
export default connect(
	mapStateToProps,
	{ addToCart }
)(ProductsList)
