import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  // updateUserInfo,
  updatePostInput,
  updatePostTitle,
  clearState
} from "../../ducks/reducer";
import {
  // MDBNavLink,
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

class CreatePost extends Component {
  componentDidMount() {
    // console.log(this.props);
  }

  //! ****AXIOS SERVER CALLS**** //
  addNewPost() {
    // console.log("hit:addNewPost", this.props);
    axios
      .post("/api/post", {
        createInput: this.props.createInput,
        createTitle: this.props.createTitle
      })
      .then(res => {
        // this.props.history.push("/dashboard");
        // <--- should I use this or <Link to="/dashboard">
        this.props.clearState();
        // console.log(res)
      });
  }

  render() {
    const { updatePostInput, updatePostTitle } = this.props;
    // const { createTitle, createInput } = this.props;
    // console.log(this.props);

    return (
      <div id="CreatePost">
        <MDBView>
          <MDBMask
            className="d-flex justify-content-center align-items-center"
            // overlay="red-slight"
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
                        <h3 className="text-left">
                          <MDBIcon /> Create a post
                        </h3>
                        <hr className="hr-light" />
                        <form>
                          <input
                            type="text"
                            id="example3"
                            className="form-control form-control-sm"
                            placeholder="Title"
                            value={this.props.createTitle}
                            name="title"
                            onChange={e => updatePostTitle(e.target.value)}
                          />

                          <MDBInput
                            className="white-text "
                            iconClass="white-text"
                            icon="pencil-alt"
                            type="textarea"
                            label="What are your thoughts?"
                            outline
                            value={this.props.createInput}
                            name="input"
                            onChange={e => updatePostInput(e.target.value)}
                          />
                        </form>
                        <div className="text-center mt-4 black-text">
                          {/* <Link to="/dashboard"> */}
                          <Link to={{pathname: '/dashboard', state: { from: this.props.location.pathname }}}>
                            <MDBBtn
                              onClick={() => this.addNewPost()}
                              color="indigo"
                              className="post-btn"
                            >
                              Post
                            </MDBBtn>
                            <MDBBtn
                              onClick={() => this.props.clearState()}
                              color="indigo"
                              className="cancel"
                            >
                              Cancel
                            </MDBBtn>
                          </Link>
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

function mapStateToProps(state) {
  const { createInput, createTitle } = state;

  return {
    createTitle,
    createInput
  };
}

export default connect(mapStateToProps, {
  updatePostInput,
  updatePostTitle,
  clearState
})(CreatePost);
