/**
 * Created by chi on 7/27/16.
 */
import React from 'react';
import Product from './Product';

class ProductItem extends React.Component{
    render(){
        const { product } = this.props;
        return(
            <div
                style={
                    { marginBottom: 20 }
                }
            >
                <Product
                    title={product.title}
                    price={product.price}
                />

                <button
                    onClick={this.props.onAddToCartClicked}
                    disabled={product.inventory > 0 ? '' : 'disabled'}
                >
                    {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
                </button>

            </div>
        );
    }
}

ProductItem.propTypes = {
    product: React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        inventory: React.PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked: React.PropTypes.func.isRequired
};

export default ProductItem;