import React from "react";
import { updateUserInfo } from "../../ducks/reducer";
import { connect } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
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
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import "./Register.css";
import Swal from "sweetalert2";

class Register extends React.Component {
  state = {
    collapseID: "",
    // email: "", may add this later
    username: "",
    password1: "",
    password2: ""
  };

  //! METHODS
  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  //! AXIOS CALLS
  register = () => {
    if (this.state.password1 === this.state.password2) {
      const { username, password1: password } = this.state;
      axios
        .post("/auth/register", { username, password })
        .then(res => {
          console.log(res.data);
          this.props.updateUserInfo(res.data.user);
          Swal.fire(res.data.message);
          this.props.history.push('/')
        })
        .catch(err => {
          console.log(err.response.data.message);
          Swal.fire(err.response.data.message);
        });
    } else {
      Swal.fire('Passwords dont match!');
    }
  };

  //! REACTSTRAP MDB-REACT
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  //! ******

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="classicformpage">
        <div>
          {/* NAVBAR */}
          <MDBNavbar dark expand="md" fixed="top">
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className="white-text">BreUtah</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse("navbarCollapse")}
              />
              <MDBCollapse
                id="navbarCollapse"
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#!">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className="md-form my-0">
                        <input
                          className="form-control mr-sm-2"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {this.state.collapseID && overlay}
          {/* NAVBAR END */}
        </div>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                {/* SIGN IN HERE SECTION */}
                <MDBAnimation
                  type="fadeInLeft"
                  // type="fadeInRight"
                  delay=".3s"
                  className="signInBtn white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Already have a Account? Sign In Below
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    <p>Beer Quote</p>
                    Beer is proof that God loves us and wants us to be happy. ~
                    Benjamin Franklin
                  </h6>
                  <Link to="/">
                    <MDBBtn outline color="white">
                      Sign In
                    </MDBBtn>
                  </Link>
                </MDBAnimation>
                {/* END: SIGN IN HERE SECTION */}
                {/* REGISTER INPUT FILED */}
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation
                    type="fadeInRight"
                    // type="fadeInLeft"
                    delay=".3s"
                  >
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Register:
                        </h3>
                        <hr className="hr-light" />

                        <form action="">
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Username"
                            icon="user"
                            value={this.state.username}
                            onChange={e =>
                              this.handleChange("username", e.target.value)
                            }
                            type="text"
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
                            label="Password"
                            icon="lock"
                            type="password"
                            autoComplete="off"
                            value={this.state.password1}
                            onChange={e =>
                              this.handleChange("password1", e.target.value)
                            }
                          />
                          <MDBInput
                            className="white-text"
                            iconClass="white-text"
                            label="Repeat password"
                            icon="lock"
                            type="password"
                            autoComplete="off"
                            value={this.state.password2}
                            onChange={e =>
                              this.handleChange("password2", e.target.value)
                            }
                          />
                        </form>
                        <div className="text-center mt-4 black-text">
                          <MDBBtn onClick={this.register} color="indigo">
                            Sign Up
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
                {/* END: REGISTER INPUT FILED */}
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}
const mapDispatchToProps = {
  updateUserInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
