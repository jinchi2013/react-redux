import { combineReducers } from 'redux'
import products, * as fromProducts from './products'
import shoppingCart, * as fromShoppingCart from './shoppingCart'

export default combineReducers({
	products,
	shoppingCart
})

const getAddedProductsId = (state) => 
	fromShoppingCart.getAddedProductsIdInCart(state.shoppingCart)

const getAddedProductQuantity = (state, productId) => 
	fromShoppingCart.getProductQuantityInCart(state.shoppingCart, productId)

const getProduct = (state, productId) => 
	fromProducts.getProduct(state.products, productId)

export const getShoppingCartProducts = (state) => 
	getAddedProductsId(state).map( id => ({
		...getProduct(state, id),
		quantity: getAddedProductQuantity(state, id)
	}))

export const getTotal = (state) => 
	getAddedProductsId(state).reduce((total, id) => 
		total + getProduct(state, id).price * getAddedProductQuantity(state, id), 0)
	.toFixed(2)
