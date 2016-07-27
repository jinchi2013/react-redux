/**
 * Created by chi on 7/27/16.
 */
import React from 'react';

class Product extends React.Component {
    render(){
        const { price, quantity, title } = this.props;
        return (
            <div>
                {title} - &#36;{price} {quantity ? `x ${quantity}` : null}
            </div>
        );
    }
}

Product.propTypes = {
    price : React.PropTypes.number,
    quantity: React.PropTypes.number,
    title: React.PropTypes.string
};

export default Product;