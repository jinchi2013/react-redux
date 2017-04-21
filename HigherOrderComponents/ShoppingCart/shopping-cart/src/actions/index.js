import uuid from 'uuid'
import { camelizeKeys } from 'humps'
import * as actionTypes from '../actionConstants/ActionsConstants'
import productsJson from './store_items.json'

/*
	GET Products Action ===>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/

const addUUidToProducts = products => {
	return products.map(product => ({
		...product,
		id: uuid()
	}))
}

const receiveProducts = productsWithIds => ({
	type: actionTypes.RECEIVE_PRODUCTS,
	products: productsWithIds
})

const requestProducts = () => ({
	type: actionTypes.REQUEST_PRODUCTS
})

/*
Used for when request fail

const requestProductsFail = error => ({
	type: actionTypes.REQUEST_PRODUCTS_FAIL,
	error: error
}) 
*/

export const getAllProduct = () => dispatch => {

	dispatch(requestProducts())

	setTimeout(()=>{
		const productsWithIds = addUUidToProducts(camelizeKeys(productsJson))
		dispatch(receiveProducts(productsWithIds))
	}, 1500)
}

/*
	UPDATE PRODUCTS QUANTITY
*/

const updateProductQuantity = productId => ({
	type: actionTypes.UPDATE_PRODUCT_QUANTITY,
	productId
})

/*
	Shopping Cart Action ===>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/

// add to cart =================================
const addToCartAction = productId => ({
	type: actionTypes.ADD_TO_CART,
	productId
})

const noRemainingNotice = () => ({
	type: actionTypes.NO_REMAINING_NOTICE
})

const checkQuantityRemaining = (product, dispatch) => {
	if(product.quantityRemaining > 0) {
		dispatch(updateProductQuantity(product.id))
		dispatch(addToCartAction(product.id))
	} else {
		dispatch(noRemainingNotice())
	}
}

export const addToCart = productId => (dispatch, getState) => 
	checkQuantityRemaining(getState().products.productsIdMap[productId], dispatch)

// add to cart end ===============================

export const requestCheckout = (dispatch, getState) => ({
	type: actionTypes.REQUEST_CHECKOUT
})

export const removeProductInCart = (productId, quantity) => ({
	type: actionTypes.REMOVE_PRODUCT_IN_CART,
	productId,
	quantity
})

// decrease and increase item in the cart =========================

const decreaseProductQuantityAction = (productId, quantity) => ({
	type: actionTypes.DECREASE_PRODUCT_QUANTITY,
	productId,
	quantity
})

export const decreaseProductQuantity = (productId, quantity) => (dispatch, getState) => {
	if(quantity === 1) {
		dispatch(removeProductInCart(productId, quantity))
	} else {
		dispatch(decreaseProductQuantityAction(productId, quantity))
	}
}

export const increaseProductQuantity = (productId, quantity) => ({
	type: actionTypes.INCREASE_PRODUCT_QUANTITY,
	productId
})

// End of decrease and increase item in the cart =========================

