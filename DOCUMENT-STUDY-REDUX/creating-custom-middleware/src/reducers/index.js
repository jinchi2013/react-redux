import { combineReducers } from 'redux'

const middlewareState = (state={text: 'init'}, action) => {
	switch (action.type) {
		case 'MIDDLEWARE_ACTION':
			return {
				text: 'this is test msg!!!'
			}
		case 'METADELAY' :
			return {
				text: 'meta delay tryout'
			}
		default:
			return state
	}
}

const rootReducer = combineReducers({
	middlewareState
})

export default rootReducer
