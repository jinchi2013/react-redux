import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import MoviesGrid from './containers/MoviesGrid'
import MovieListOfLiked from './containers/MovieListOfLiked'
import MovieListOfBlocked from './containers/MovieListOfBlocked'
import NoMatch from './components/utils/NoMatch'

const Routes = () => (
  <Switch>
    <Route exact path="/" render={()=><h1>This is the home page</h1>} />
    <Route path="/MoviesGrid" component={MoviesGrid} />
    <Route path="/MovieListOfLiked" component={MovieListOfLiked} />
    <Route path="/MovieListOfBlocked" component={MovieListOfBlocked} />
    <Route component={NoMatch}/>
  </Switch>
)

export default Routes
