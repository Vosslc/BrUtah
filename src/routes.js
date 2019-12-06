import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './components/Login-Register/Register'
import Login from './components/Login-Register/Login'
import Dashboard from './components/Dashboard/Dashboard'
import CreatePost from './components/Posting/CreatePost'
import PostDetails from './components/Posting/PostDetails'

export default (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/register' component={Landing} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/createpost' component={CreatePost} />
    <Route path='/postdetails/:id' component={PostDetails} />
    {/* <Route path='/post' component={Post} /> */}
    
  </Switch>
)