import React, { PropTypes } from 'react'
import ProductInTheCart from './ProductInTheCart'

const ShoppingCart = ({ addedProducts, showShoppingCart, total, requestCheckout, removeProductInCart, decreaseProductQuantity, increaseProductQuantity }) => {
	const style = {
		cartContainer: {
			display: showShoppingCart ? 'block' : 'none',
			height: '100%',
			width: '100%',
			background: 'white',
			textAlign: 'center'
		},
		purchaseButton: {
			userSelect: 'none',
			border: 0,
			backgroundColor: '#00b39d',
			color: 'white',
			width: '100%',
			height: 50,
			marginTop: 5,
			fontSize: 15
		}
	} 

	return (
		<div style={style.cartContainer}>
			{
				addedProducts.length === 0 ? 

					<h4>There is nothing here!</h4> : 

					addedProducts.map(addedProduct => 
						<ProductInTheCart 
							addedProduct={addedProduct}
							key={addedProduct.id}
							removeProductInCart={removeProductInCart}
							decreaseProductQuantity={decreaseProductQuantity}
							increaseProductQuantity={increaseProductQuantity}
						/>
					)
			}
			<div><span>Total: $ </span>{total}</div>
			<button style={style.purchaseButton} onClick={requestCheckout}>Purchase</button>
		</div>
	)
}

ShoppingCart.PropTypes = {
	addedProducts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			imgSrc: PropTypes.string.isRequired,
			itemName: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			quantityRemaining: PropTypes.number.isRequired,
			quantity: PropTypes.number.isRequired
		})
	).isRequired,
	showShoppingCart: PropTypes.bool.isRequired,
	total: PropTypes.number.isRequired,
	requestCheckout: PropTypes.func.isRequired,
	removeProductInCart: PropTypes.func.isRequired,
	decreaseProductQuantity: PropTypes.func.isRequired,
	increaseProductQuantity: PropTypes.func.isRequired
}

export default ShoppingCart