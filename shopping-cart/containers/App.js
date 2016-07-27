/**
 * Created by chi on 7/27/16.
 */
import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';

class App extends React.Component{
    render() {
        return(
            <div>
                <h2>Your Shopping Cart</h2>
                <hr/>
                <ProductsContainer/>
                <hr/>
                <CartContainer/>
            </div>
        );
    }
}

export default App;