import React from 'react'
import { Route } from 'react-router-dom'
import Nest from '../pages/Nest'
import Profile from '../pages/Profile'

const Routes = () => (
  <div>
    <Route exact path="/" component={Nest} />
    <Route path="/profile" component={Profile} />
  </div>
)

export default Routes
