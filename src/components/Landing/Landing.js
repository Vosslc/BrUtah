import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Landing extends Component {
  render() {
    return (
      <div>
        Landing.js


        {/* <input
          onChange={e => this.handleChange('email', e.target.value)}
          value={this.state.email}
          placeholder="Email"
          type="text"
        /> */}
        <button>Login!</button>
        <Link to="/login">
        </Link>
        
        <Link to="/register">
        <button>Register!</button>
          <input placeholder="Username...." type="text"/>
        </Link>
      </div>
    )
  }
}

export default Landing
