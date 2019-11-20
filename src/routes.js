import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Login from './components/Login-Register/Login'
import Register from './components/Login-Register/Register'
import Dashboard from './components/Dashboard/Dashboard'
import Post from './components/Posting/Post'

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/post' component={Post} />
    
  </Switch>
)