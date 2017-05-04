import jsonApi from '../jsonApi/jsonApi'
import * as fromActionConst from './actionConstant'

const requestJson = () => ({
	type: fromActionConst.REQUEST_JSON,
})

const receiveJson = (json) => ({
	type: fromActionConst.RECEIVE_JSON,
	json: json
})

const failedJson = (err) => ({
	type: fromActionConst.FAILED_JSON,
	err: err
})

export const getJson = () => dispatch => {
	dispatch(requestJson())

	jsonApi()
		.then( json  => dispatch(receiveJson(json)))
		.catch( err => dispatch(failedJson(err)))
}
