/**
 * Created by chi on 7/27/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { checkout } from '../actions';
import { getTotal, getCartProducts } from '../reducers';
import Cart from '../components/Cart';

class CartContainer extends React.Component {
    render() {
        const { products, total } = this.props;

        return(
            <Cart
                products={products}
                total={total}
                onCheckoutClicked={
                    () => {
                        this.props.checkout();
                    }
                }
            />
        );
    }
}

CartContainer.propTypes = {
    products: React.PropTypes.arrayOf(
        React.PropTypes.shape(
            {
                id: React.PropTypes.number.isRequired,
                title: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                quantity: React.PropTypes.number.isRequired
            }
        ).isRequired
    ).isRequired,
    total: React.PropTypes.string.isRequired,
    checkout: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        products: getCartProducts(state),
        total: getTotal(state)
    }
};

export default connect(
    mapStateToProps,
    { checkout }
)(CartContainer);