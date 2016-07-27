/**
 * Created by chi on 7/27/16.
 */
import { combineReducers } from 'redux';
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes';

const products = ( state, action )=>{
    switch (action.type){
        case ADD_TO_CART:
            return Object.assign({}, state, {
                inventory: state.inventory - 1
            });
        default:
            return state;
    }
};

const byId = (state=[], action) => {
    switch (action.type){
        case RECEIVE_PRODUCTS:
            return Object.assign(
                {},
                state,
                action.products.reduce( ( obj, product ) => {
                    obj[product.id] = product;
                    return obj;
                }, {} )
            );
        default:
            const { productId } = action;
            if(productId){
                return Object.assign({}, state, {
                    [productId]: products(state[productId], action)
                });
            }
            return state;
    }
};

function visibleIds(state=[], action){
    switch (action.type){
        case RECEIVE_PRODUCTS:
            return action.products.map( (product) => {
                return product.id;
            } );
        default:
            return state;
    }
}

export default combineReducers({
    byId,
    visibleIds
});

export const getProduct = (state, id) => {
    return state.byId[id];
};

export const getVisibleProducts = (state) => {
    return state.visibleIds.map( (id) => {
        getProduct(state, id);
    } );
};