import { combineReducers } from 'redux'

const middlewareState = (state={text: 'init'}, action) => {
	switch (action.type) {
		case 'MIDDLEWARE_ACTION':
			return {
				text: 'this is test msg!!!'
			}
		default:
			return state
	}
}

const rootReducer = combineReducers({
	middlewareState
})

export default rootReducer
