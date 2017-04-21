import { combineReducers } from 'redux'
import { 
	REQUEST_PRODUCTS, 
	RECEIVE_PRODUCTS, 
	REQUEST_PRODUCTS_FAIL,
	UPDATE_PRODUCT_QUANTITY,
	INCREASE_PRODUCT_QUANTITY,
	DECREASE_PRODUCT_QUANTITY,
	REMOVE_PRODUCT_IN_CART } from '../actionConstants/ActionsConstants'

const initial_all_products = {
	isRequesting: false,
	requestFailed: false,
}

const productsMapById = (products) => (
	products.reduce((map, product)=>{
		map[product.id] = product
		return map
	}, {})
)

const productsIdMap = (state=initial_all_products, action) => {
	const { productId, quantity } = action
	const product = state[productId] 

	switch (action.type) {
		case REQUEST_PRODUCTS:
			return {
				...state,
				isRequesting: true
			}
		case RECEIVE_PRODUCTS:
			return {
				...state,
				...productsMapById(action.products),
				isRequesting: false,
				requestFailed: false
			}
		case REQUEST_PRODUCTS_FAIL:
			return {
				...state,
				products: [],
				requestFailed: true
			}
		case UPDATE_PRODUCT_QUANTITY:
		case INCREASE_PRODUCT_QUANTITY:
			return {
				...state,
				[productId]: {
					...product,
					quantityRemaining: product.quantityRemaining - 1
				}
			}
		case DECREASE_PRODUCT_QUANTITY:
			return {
				...state,
				[productId]: {
					...product,
					quantityRemaining: product.quantityRemaining + 1
				}
			}
		case REMOVE_PRODUCT_IN_CART:
			return {
				...state,
				[productId]: {
					...product,
					quantityRemaining: product.quantityRemaining + quantity
				}
			}
		default:
			return state
	}
}

const productsArrayById = (products) => {
	return Object.keys(productsMapById(products))
}

const productsIdArray = (state=[], action) => {
	switch (action.type) {
		case RECEIVE_PRODUCTS:
			return productsArrayById(action.products)
		default:
			return state
	}
}

export default combineReducers({
	productsIdMap,
	productsIdArray
})

export const getProduct = (state, id) => 
	state.productsIdMap[id]

export const getAllProducts = (state) =>
	state.productsIdArray.map(id => getProduct(state, id))

