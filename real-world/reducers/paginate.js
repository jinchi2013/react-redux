/**
 * Created by chi on 8/4/16.
 */
import union from 'lodash/union';

//Creates a reducer managing pagination, given the action types to handle,
//and a function telling how to extract the key from an action.
function paginate( {types, mapActionToKey} ){
    if(!Array.isArray(types) || types.length !== 3){
        throw new Error('Expected types to be an array of three elements')
    }
    if(typeof mapActionToKey !== 'function'){
        throw new Error('Expected mapActionToKey to be a function. ')
    }
    const [ requestType, successType, failureType ] = types;
    function updatePagination(
        state={
            isFetching: false,
            nextPageUrl: undefined,
            pageCount: 0,
            ids: []
        }, action
    ){
        switch(action.type){
            case requestType:
                return merge({},state, {isFetching:true});
            case successType:
                return Object.assgin(
                    {},
                    state,
                    {
                        isFetching: false,
                        ids: union(state.ids, action.response.result),
                        nextPageUrl: action.response.nextPageUrl,
                        pageCount: state.pageCount + 1
                    }
                );
            case failureType:
                return Object.assgin(
                    {},
                    state,
                    {
                        isFetching: false
                    }
                );
        }
    }

    return function updatePaginationByKey(state = {}, action) {
        switch (action.type) {
            case requestType:
            case successType:
            case failureType:
                const key = mapActionToKey(action);
                if(typeof key !== 'string'){
                    throw new Error('Expected key to be a string')
                }
                return Object.assgin(
                    {},
                    state,
                    {
                        [key]: updatePagination(state[key], action)
                    }
                );
        }
    }
}
export default paginate;