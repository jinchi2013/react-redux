/**
 * Created by chi on 7/27/16.
 */
import React from 'react';
import Product from './Product';

class Cart extends React.Component{
    render(){
        const { products, total, onCheckoutClicked } = this.props;
        const hasProducts = products.length > 0;
        const nodes =
            !hasProducts ?
                <em>Please add some products to cart.</em> :
                products.map((product)=>{
                    return (
                        <Product
                            title    = {product.title}
                            price    = {product.price}
                            quantity = {product.quantity}
                            key      = {product.id}
                        />
                    );
                });

        return (
            <div>
                <h3>Your Cart</h3>
                <div>{nodes}</div>
                <p>Total: &#36;{total}</p>
                <button
                    onClick={onCheckoutClicked}
                    disabled={hasProducts ? '':'disabled'}
                >
                    Checkout
                </button>
            </div>
        );
    }
}

Cart.propTypes = {
    products: React.PropTypes.array,
    total: React.PropTypes.string,
    onCheckoutClicked: React.PropTypes.func
};

export default Cart;