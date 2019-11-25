import React from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../ducks/reducer";
// import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from "mdbreact";
import "./Login.css";
import Swal from "sweetalert2";

class Login extends React.Component {
  state = {
    collapseID: "",
    username: "",
    password: ""
  };

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  login = () => {
    const { username, password } = this.state;
    axios
      .post("/auth/login", { username, password })
      .then(res => {
        this.props.updateUserInfo(res.data.user);
        Swal.fire(res.data.message);
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        Swal.fire(err.response.data.message);
      });
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <div id="classicformpage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation
                    // type="fadeInRight"
                    type="fadeInLeft"
                    delay=".3s"
                  >
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Login:
                        </h3>
                        <hr className="hr-light" />
                        <form action="">
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Username"
                            icon="user"
                            onChange={e =>
                              this.handleChange("username", e.target.value)
                            }
                            value={this.state.username}
                          />
                          {/* <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                        /> */}
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Your password"
                            icon="lock"
                            type="password"
                            autoComplete="on"
                            onChange={e =>
                              this.handleChange("password", e.target.value)
                            }
                            value={this.state.password}
                          />
                        </form>
                        <div className="text-center mt-4 black-text">
                          <MDBBtn onClick={this.login} color="indigo">
                            Sign In
                          </MDBBtn>
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label">
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="twitter"
                                className="white-text"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="linkedin"
                                className="white-text"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="instagram"
                                className="white-text"
                              />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
                <MDBAnimation
                  // type="fadeInLeft"
                  type="fadeInRight"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Don't have an account?
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    <p>Beer Quote</p>
                    Beer is proof that God loves us and wants us to be happy. ~
                    Benjamin Franklin
                  </h6>
                  <Link to="/Register">
                    <MDBBtn outline color="white">
                      Register
                    </MDBBtn>
                  </Link>
                </MDBAnimation>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default connect(null, { updateUserInfo })(Login);

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";

// export class Landing extends Component {
//   render() {
//     return (
//       <div>
//         Landing.js
//         {/* <input
//           onChange={e => this.handleChange('email', e.target.value)}
//           value={this.state.email}
//           placeholder="Email"
//           type="text"
//         /> */}
//         <Link to="/login">
//           <Button variant="primary">Login</Button>
//         </Link>
//         <Link to="/register">
//           <button>Register!</button>
//           <input placeholder="Username...." type="text" />
//         </Link>
//       </div>
//     );
//   }
// }

// export default Landing;

// import React, { Component } from 'react'

// export class Login extends Component {
//   render() {
//     return (
//       <div>
//         Login.js
//       </div>
//     )
//   }
// }

// export default Login
