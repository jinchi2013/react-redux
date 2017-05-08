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
		date: {
			weekDayList: [],
			monthsList: []
		}
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

const getFeatureCards = (state) => state.jsonObject.json.featureCards
export const getFromFeatureCards = (state, feature) => getFeatureCards(state)[feature]

const getDateObj = (state) => state.jsonObject.json.date
export const getFromDateObj = (state, list) => getDateObj(state)[list]
