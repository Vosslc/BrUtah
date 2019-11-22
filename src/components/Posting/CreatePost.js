import React from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../ducks/reducer";
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
import "./CreatePost.css";

class CreatePost extends React.Component {
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
      <div id="CreatePost">
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
          <MDBMask
            className="d-flex justify-content-center align-items-center"
            overlay="red-slight"
          >
            {/* <MDBMask className="flex-center" overlay="red-slight"> */}
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <MDBAnimation
                    // type="fadeInRight"
                    type="fadeInLeft"
                    delay=".3s"
                  >
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon /> Create a post
                        </h3>
                        <hr className="hr-light" />
                        <form>
                          <MDBInput
                            className="white-text "
                            iconClass="white-text"
                            icon="pencil-alt"
                            type="textarea"
                            label="What are your thoughts?"
                            outline
                          />
                        </form>
                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="indigo">Post</MDBBtn>
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
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default connect(null, { updateUserInfo })(CreatePost);
