import React from 'react'
import { Route } from 'react-router-dom'
import Nest from '../pages/Nest'
import Editor from '../pages/Editor'
import Profile from '../pages/Profile'
import Subjects from '../pages/Subjects'
import Subject from '../pages/Subject'
import Admin from '../pages/Admin'

const Routes = () => (
  <div>
    <Route exact path="/" component={Nest} />
    <Route path="/editor" component={Editor} />
    <Route path="/profile" component={Profile} />
    <Route path="/subjects" component={Subjects} />
    <Route path="/subject" component={Subject} />
    <Route path="/admin" component={Admin} />
  </div>
)

export default Routes
