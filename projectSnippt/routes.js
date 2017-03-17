import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import MainLayout from './containers/MainLayout'
import Signin from './containers/SigninContainer'
import Category from './containers/Category/CategoryPage'

const routes = (
  <Route component={App} >
    <Route component={MainLayout} path='/'>
      <Route component={Signin} path='/(:countryCode/)r/new/login' />,
      <Route component={Category} path='/(:countryCode/)r/new/c/:gender/:category(/:subcategory/:sublevel)' />
    </Route>
  </Route>
)

export default routes