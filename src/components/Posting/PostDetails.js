import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../ducks/reducer";
import axios from "axios";
// import { Dashboard } from "../Dashboard/Dashboard"
// import { Link } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  // MDBAnimation,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon
} from "mdbreact";
// import "./CreatePost.css";

export class PostDetails extends Component {
  constructor() {
    super();
    this.state = {
      post: {}
    };
  }

  getSelectedPost() {
    console.log("p", this.props.match);
    axios.get(`/api/post/${this.props.match.params.id}`).then(response => {
      // console.log("res", response);
      //* '/postdetails/:id' in routes.js is match.params which being passed down by react router.
      const selectedPost = response.data[0];
      this.setState({
        post: selectedPost
      });
      console.log("this is state", this.state.post);
    });
  }
  componentDidMount() {
    this.getSelectedPost();
  }

  render() {
    return (
      <div id="postPage">
        <MDBView className="postContainer">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBCard className="shadow-box-example hoverable">
                  {/* <Link className="btn stretched-link" to={`/postdetails/${this.props.el.post_id}`}> */}
                  <MDBCardBody>
                    <MDBCardTitle tag="h5">
                      {this.state.post.title}
                      {/* {console.log("hit", this.state.post)} */}
                    </MDBCardTitle>

                    <MDBCardText>{this.state.post.content}</MDBCardText>
                  </MDBCardBody>

                  {/*! COMMENTS */}

                  <MDBCardFooter className="footerBar">
                    <div className="def-number-input number-input">
                      <button>
                        <MDBIcon icon="arrow-alt-circle-up" />
                      </button>
                      {/* <input
                        className="quantity"
                        name="quantity"
                        value={this.state.value}
                        onChange={() => console.log("change")}
                        type="number"
                      /> */}
                      <button>
                        <MDBIcon icon="arrow-alt-circle-down" />
                      </button>
                    </div>

                    <button>
                      <i className="fas fa-share"> Share</i>
                    </button>
                    <i className="fas fa-bookmark"> Save</i>
                    <button>
                      <MDBIcon icon="edit" />
                      Edit
                    </button>
                  </MDBCardFooter>
                  <MDBCardBody>
                    <hr />
                    <p>Comment as Roundy</p>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fas fa-pencil-alt prefix"></i>
                        </span>
                      </div>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Whats are your thoughts?"
                      ></textarea>
                    </div>
                    <MDBBtn outline color="default" size="sm">
                      Comment
                      <MDBIcon icon="pencil-alt" className="ml-1" />
                    </MDBBtn>
                    <br />
                    <hr />
                    <MDBCardTitle tag="h5">Comments...</MDBCardTitle>
                    <MDBCardText className="postText">
                      This is a comment about beer.. Beer is good. I Beer is
                      cold.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default connect(null, { updateUserInfo })(PostDetails);
