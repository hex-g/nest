import React from 'react'
import { Route } from 'react-router-dom'
import Nest from '../pages/Nest'
import Profile from '../pages/Profile'
import Subjects from '../pages/Subjects'

const Routes = () => (
  <div>
    <Route exact path="/" component={Nest} />
    <Route path="/profile" component={Profile} />
    <Route path="/subjects" component={Subjects} />
  </div>
)

export default Routes
