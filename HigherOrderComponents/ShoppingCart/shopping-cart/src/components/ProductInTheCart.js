import React, { PropTypes } from 'react'

const ProductInTheCart = ({addedProduct, removeProductInCart, decreaseProductQuantity, increaseProductQuantity}) => {
	const style={
		padding: 10,
		borderBottom: '1px solid rgb(242, 242, 242)',

		imgStyle: {
			width: 'auto',
			height: 60
		},
		productDetails: {
			display: 'inline-block',
			verticalAlign: 'top',
			fontSize: 12,
			width: '35%',

			toggleQuanButton: {
				fontSize: 15
			}
		},
		imgContainer: {
			display: 'inline-block',
			width: '60%',
			textAlign: 'center'
		},
		label: {
			textTransform: 'uppercase'
		},
		removeProductButton: {
			width: '100%',
			backgroundColor: '#e65d4f',
			border: 0,
			color: 'white'
		}
	}

	const {
		id,
		quantity,
		quantityRemaining,
		imgSrc,
		itemName,
		price
	} = addedProduct

	return (
		<div style={style}>
			<div style={style.imgContainer}>
				<img src={`${imgSrc}`} alt={itemName} style={style.imgStyle} />
			</div>
			<div style={style.productDetails}>
				<div><span style={style.label}>Name: </span>{itemName}</div>
				<div><span style={style.label}>Price: $ </span>{price}</div>
				<div>
					<button 
						onClick={ ()=> decreaseProductQuantity(id, quantity)}
						style={style.productDetails.toggleQuanButton}
					>-</button>
					<span style={style.label}>Quantity: </span>
					{quantity}
					{
						quantityRemaining === 0 ?
							null :
							<button 
								onClick={ ()=> increaseProductQuantity(id, quantity)}
								style={style.productDetails.toggleQuanButton}
							>+</button>
					}
				</div>
				<button 
					onClick={ ()=>removeProductInCart(id, quantity) }
					style={style.removeProductButton}
				>
					Remove
				</button>
			</div>
		</div>
	)
}

ProductInTheCart.PropTypes = {
	addedProduct: PropTypes.shape({
			id: PropTypes.string.isRequired,
			imgSrc: PropTypes.string.isRequired,
			itemName: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			quantityRemaining: PropTypes.number.isRequired,
			quantity: PropTypes.number.isRequired
		}),
	removeProductInCart: PropTypes.func.isRequired,
	decreaseProductQuantity: PropTypes.func.isRequired,
	increaseProductQuantity: PropTypes.func.isRequired
}

export default ProductInTheCart

