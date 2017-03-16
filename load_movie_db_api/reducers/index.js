import {combineReducers} from 'redux'
import {
	REQUEST_MOVIES,
	RECEIVE_MOVIES,
	INVALID_MOVIES
} from '../actions';

const initialMoviesState = {
	isPending: false,
	NeedToPull: false,
	movies: []
}

const movies = (state=initialMoviesState, action)=>{
	 switch(action.type) {
	 	case REQUEST_MOVIES:
	 		return Object.assign(
	 				{},
	 				state,
	 				{
	 					isPending: true,
	 					NeedToPull: false
	 				}
	 			)
 		case RECEIVE_MOVIES:
	 		return Object.assign(
	 			{},
	 			state,
	 			{
	 				isPending: false,
	 				NeedToPull: false,
	 				movies: action.movies,
	 				lastUpdated: action.receiveAt
	 			}
	 		)
 		case INVALID_MOVIES:
 			return Object.assign(
	 					{},
	 					state,
	 					{
	 						isPending: false,
	 						NeedToPull: true
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
