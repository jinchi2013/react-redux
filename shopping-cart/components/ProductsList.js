/**
 * Created by chi on 7/27/16.
 */
import React from 'react';

class ProductsList extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

ProductsList.propTypes = {
    children: React.PropTypes.node,
    title: React.PropTypes.string.isRequired
};

export default ProductsList;