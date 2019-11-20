import React, { Component } from 'react'
import Login from "../Login-Register/Login"
import Register from "../Login-Register/Register"

export class Landing extends Component {
  render() {
    return (
      <div>
        Landing.js
        <Login />
        <Register />
      </div>
    )
  }
}

export default Landing
