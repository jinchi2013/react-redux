/**
 * Created by chi on 7/27/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { getVisibleProducts } from '../reducers/products';
import ProductItem from '../components/ProductItem';
import ProductsList from '../components/ProductsList';

const ProductsContainer = ({products, addToCart}) => (
            <ProductsList title="Products">
                {products.map( (product) => 
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToCartClicked={
                            ()=> addToCart(product.id)
                        } />
                )}
            </ProductsList>
        )

ProductsContainer.propTypes = {
    products: React.PropTypes.arrayOf(
        React.PropTypes.shape(
            {
                id: React.PropTypes.number.isRequired,
                title: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                inventory: React.PropTypes.number.isRequired
            }
        ).isRequired
    ).isRequired,
    addToCart: React.PropTypes.func.isRequired
};

const mapStateToProps = (state)=>({
        products: getVisibleProducts(state.products)
    })

export default connect(
    mapStateToProps,
    { addToCart }
)(ProductsContainer)