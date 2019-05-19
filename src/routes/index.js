import React from 'react'
import { Route } from 'react-router-dom'
import Nest from '../pages/Nest'
import Profile from '../pages/Profile'

const Routes = () => (
  <div>
    <Route exact path="/" component={Nest} />
<<<<<<< HEAD
    <Route path="/profile" component={Profile} />
=======
>>>>>>> feature/adjust-style
  </div>
)

export default Routes
