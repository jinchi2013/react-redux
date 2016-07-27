/**
 * Created by chi on 7/27/16.
 */
import { combineReducers } from 'redux';
import cart, * as fromCart from './cart';
import products, * as fromProducts from './products';

export default combineReducers({
    cart,
    products
});

const getAddedIds = (state)=>{
    return fromCart.getAddedIds(state.cart);
};

const getQuantity = (state, id)=>{
    return fromCart.getQuantity(state.cart, id);
};

const getProduct = (state, id)=>{
    return fromProducts.getProduct(state.products, id);
};

export const getTotal = (state)=>{
    return getAddedIds(state).reduce(
        (total, id) => {
            return total + getProduct(state, id).price * getQuantity(state, id);
        },
        0
    ).toFixed(2);
};



export const getCartProducts = (state)=>{
    return getAddedIds(state).map( (id) => {
        return Object.assign(
            {},
            getProduct(state, id),
            {
                quantity: getQuantity( state, id )
            }
        );
    } );
};

