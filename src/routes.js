import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Login-Register/Register";
import Login from "./components/Login-Register/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import CreatePost from "./components/Posting/CreatePost";
import PostDetails from "./components/Posting/PostDetails";
// import Register from "./components/Login-Register/Register";
import ClockIn from "./components/ClockInOut/ClockIn.jsx";
import NpmClockInOut from "./components/ClockInOut/NpmClockInOut"

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/register" component={Landing} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/createpost" component={CreatePost} />
    <Route path="/postdetails/:id" component={PostDetails} />
    <Route path="/time" component={ClockIn} />
    <Route path="/npmtime" component={NpmClockInOut} />
    {/* <Route path='/post' component={Post} /> */}

  </Switch>
);

