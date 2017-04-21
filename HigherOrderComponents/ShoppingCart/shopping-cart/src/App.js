import React, { Component } from 'react'
import StoreHeader from './containers/StoreHeader'
import ProductsList from './containers/ProductsList'

class App extends Component {
  render() {
    return (
      <div>
        <StoreHeader />
        <ProductsList />
      </div>
    );
  }
}

export default App
