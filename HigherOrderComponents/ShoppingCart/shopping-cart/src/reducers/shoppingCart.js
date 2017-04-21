import { combineReducers } from 'redux'
import {
	ADD_TO_CART,
	REQUEST_CHECKOUT,
	REMOVE_PRODUCT_IN_CART,
	INCREASE_PRODUCT_QUANTITY,
	DECREASE_PRODUCT_QUANTITY
} from '../actionConstants/ActionsConstants'

const addedProductsId = (state=[], action) => {
	const { productId } = action
	switch(action.type) {
		case ADD_TO_CART:
			if(state.indexOf(productId) > -1) {
				return state
			}
			return [
				...state,
				productId
			]
		case REMOVE_PRODUCT_IN_CART:
			return state.filter(id => id !== productId)
		case REQUEST_CHECKOUT:
			return []
		default:
			return state
	}
}

const addedProductsQuantity = (state={}, action) => {
	const { productId } = action
	switch(action.type) {
		case ADD_TO_CART:
			return {
				...state,
				[productId]: ( state[productId] || 0 ) + 1 
			}
		case REMOVE_PRODUCT_IN_CART:
			return Object.keys(state).reduce((newState, id) => {
							if(id !== productId) {
								newState[id] = state[id]
							}
							return newState
						}, {})
		case INCREASE_PRODUCT_QUANTITY:
			return {
				...state,
				[productId]: state[productId] + 1
			}
		case DECREASE_PRODUCT_QUANTITY:
			return {
				...state,
				[productId]: state[productId] - 1
			}
		case REQUEST_CHECKOUT:
			return {}
		default:
			return state
		}
}

export default combineReducers({
	addedProductsId,
	addedProductsQuantity
})

export const getProductQuantityInCart = (state, productId) => 
	state.addedProductsQuantity[productId] || 0

export const getAddedProductsIdInCart = state => state.addedProductsId

