import React from 'react'
import { Route } from 'react-router-dom'
import Nest from '../pages/Nest'
import Editor from '../pages/Editor'

const Routes = () => (
  <div>
    <Route exact path="/" component={Nest} />
    <Route path="/editor" component={Editor} />
  </div>
)

export default Routes
