import React, { Component ,PropTypes } from 'react'
import { connect } from 'react-redux'
import { 
	getShoppingCartProducts, 
	getTotal 
} from '../reducers'
import { 
	requestCheckout, 
	removeProductInCart, 
	decreaseProductQuantity,
	increaseProductQuantity
} from '../actions'
import ShoppingCart from '../components/ShoppingCart'
import shoppingCartIcon from '../image/shoppingCartIcon.png'

class StoreHeader extends Component {
	constructor(props) {
		super(props)

		this._toggleShoppingCart = this._toggleShoppingCart.bind(this)

		this.state = {
			showShoppingCart: false
		}
	}

	_toggleShoppingCart() {
		this.setState(state => ({
			showShoppingCart: !state.showShoppingCart
		}))
	}

	render() {
		const style={
			borderBottom: '1px solid rgb(242, 242, 242)',
			padding: 10,

			headerStyle: {
				padding: '10px 0px 10px 0px',
				margin: 0,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',

				headerWelcome: {
					display: 'inline-block'
				},

				headerCart: {
					display: 'inline-block',
					headerCartButton: {
						background: `url("${shoppingCartIcon}") no-repeat center`,
						backgroundSize: '30px 30px',
						display: 'inline-block',
						position: 'relative',
						top: 10,
						width: 30,
						height: 30
					}
				}
			}
		}

		const { 
			addedProducts, 
			total, 
			requestCheckout, 
			removeProductInCart, 
			decreaseProductQuantity,
			increaseProductQuantity
		} = this.props

		return (
			<header style={style}>
				<ul style={style.headerStyle}>
					<li style={style.headerStyle.headerWelcome}>
						<h3>Welcome</h3>
					</li>
					<li style={style.headerStyle.headerCart}>
						<span style={style.headerStyle.headerCart.headerCartButton} onClick={this._toggleShoppingCart}></span>
					</li>
				</ul>
				<ShoppingCart 
					addedProducts={addedProducts}
					total={total}
					showShoppingCart={this.state.showShoppingCart}
					requestCheckout={requestCheckout}
					removeProductInCart={removeProductInCart}
					decreaseProductQuantity={decreaseProductQuantity}
					increaseProductQuantity={increaseProductQuantity}
				/>
			</header>
		)
	}
}

StoreHeader.PropTypes = {
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
	total: PropTypes.number.isRequired,
	requestCheckout: PropTypes.func.isRequired,
	removeProductInCart: PropTypes.func.isRequired,
	decreaseProductQuantity: PropTypes.func.isRequired,
	increaseProductQuantity: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	addedProducts: getShoppingCartProducts(state),
	total: getTotal(state),
	requestCheckout: requestCheckout,
	removeProductInCart: removeProductInCart,
	decreaseProductQuantity: decreaseProductQuantity,
	increaseProductQuantity: increaseProductQuantity
})

export default connect(
	mapStateToProps,
	{ 
		requestCheckout, 
		removeProductInCart, 
		decreaseProductQuantity, 
		increaseProductQuantity 
	}
)(StoreHeader)
