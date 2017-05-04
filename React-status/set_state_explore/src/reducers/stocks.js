import { combineReducers } from 'redux'
import {
	REQUEST_JSON,
	RECEIVE_JSON,
	FAILED_JSON
} from '../actions/actionConstant'

const initialState = {
	isRequesting: false, 
	requestFailed: false,
	json: {
		featureCards: {
		stock: [],
		stockOrder: [],
		headerButton: [],
		},
		date: {}
	}
}

const jsonObject = (state={...initialState}, action) => {
	switch(action.type) {
		case REQUEST_JSON:
			return {
				...state,
				isRequesting: true
			}
		case RECEIVE_JSON:
			return {
				...state,
				isRequesting: false,
				requestFailed: false,
				json: action.json
			}
		case FAILED_JSON:
			return {
				...state,
				json: {},
				requestFailed: true,
				err: action.err
			}
		default:
			return state
	}
}

export default combineReducers({
	jsonObject
})

export const getStocksList = (state) => state.jsonObject.json.featureCards.stock
export const getstockOrder = (state) => state.jsonObject.json.featureCards.stockOrder
export const getHeaderButtons = (state) => state.jsonObject.json.featureCards.headerButton
export const getDateObj = (state) => state.jsonObject.json.date
