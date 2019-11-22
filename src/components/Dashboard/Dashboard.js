import React from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../ducks/reducer";
// import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
// import axios from "axios";
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
import "./Dashboard.css";
// import Swal from "sweetalert2";

class Dashboard extends React.Component {
  state = {};

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="dashboardPage">
        <div>
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
        </div>

        <MDBView>
          {/* <MDBMask className="d-flex justify-content-center align-items-center gradient"> */}
          <MDBMask className="flex-center" overlay="red-slight">
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <MDBAnimation
                    // type="fadeInRight"
                    type="fadeInLeft"
                    delay=".3s"
                  >
                    
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default connect(null, { updateUserInfo })(Dashboard);

// import React, { Component } from 'react'
// import Post from "../Posting/Post"

// export class Dashboard extends Component {
//   render() {
//     return (
//       <div>
//         Dashboard.js
//         <Post />
//       </div>
//     )
//   }
// }

// export default Dashboard
