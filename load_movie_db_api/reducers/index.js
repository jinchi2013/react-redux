import {combineReducers} from 'redux'
import {
	REQUEST_MOVIES,
	RECEIVE_MOVIES,
	INVALID_MOVIES
} from '../actions';

const initialMoviesState = {
	isFetching: false,
	NeedToPull: false,
	movies: []
}

const prepareMoives = (state=initialMoviesState, action)=>{
	 switch(action.type) {
	 	case REQUEST_MOVIES:
	 		return Object.assgin(
	 				{},
	 				state,
	 				{
	 					isFetching: true,
	 					NeedToPull: false
	 				}
	 			)
 		case RECEIVE_MOVIES:
	 		return Object.assgin(
	 			{},
	 			state,
	 			{
	 				isFetching: false,
	 				NeedToPull: false,
	 				movies: action.json,
	 				lastUpdated: action.receivedAt
	 			}
	 		)
 		case INVALID_MOVIES:
 			return Object.assgin(
	 					{},
	 					state,
	 					{
	 						isFetching: false,
	 						NeedToPull: true
	 					}
	 				)
	 	default: 
	 		return state;	
	 }
}

const movies = (state={}, action) => {
	switch(action.type) {
		case INVALID_MOVIES:
		case REQUEST_MOVIES:
		case RECEIVE_MOVIES:
			return Object.assgin(
				{},
				state,
				{
					moviesList: prepareMoives(state)
				}
			)
		default:
			 return state;
	}
}

const rootReducer = combineReducers({
	movies
})
export default rootReducer
