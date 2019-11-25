import React from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../ducks/reducer";
import {
  MDBNavLink,
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
import "./CreatePost.css";

class CreatePost extends React.Component {
  render() {
    return (
      <div id="CreatePost">
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
                    <MDBCard>
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon /> Create a post
                        </h3>
                        <hr className="hr-light" />
                        <form>
                          {/* <MDBIcon icon="arrow-alt-circle-up" />
                        <br/>
                        <MDBIcon icon="arrow-alt-circle-down" /> */}

                          <input
                            type="text"
                            id="example3"
                            className="form-control form-control-sm"
                            placeholder="Title"
                          />
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
                          <MDBNavLink to="/dashboard">
                            <MDBBtn color="indigo">Post</MDBBtn>
                          </MDBNavLink>
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
