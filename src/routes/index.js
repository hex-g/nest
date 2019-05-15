import React from 'react'
import { Route } from 'react-router-dom'
import Nest from '../pages/Nest'

const Routes = () => (
  <div>
    <Route exact path="/" component={Nest} />
  </div>
)

export default Routes
