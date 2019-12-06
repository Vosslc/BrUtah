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
  // MDBBtn,
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
      console.log("res", response);
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
        <MDBView>
          <MDBContainer className="postContainer">
            <MDBRow>
              <MDBCol>
                {/* THIS IS JUST DUMMIE DATA */}
                <MDBCard className="shadow-box-example hoverable">
                  {/* <Link className="btn stretched-link" to={`/postdetails/${this.props.el.post_id}`}> */}
                  <MDBCardBody>
                    <MDBCardTitle tag="h5">
                      {this.state.post.title}
                      {console.log("hit", this.state.post)}
                    </MDBCardTitle>

                    <MDBCardText>
                      {/* className="btn stretched-link" */}
                      {this.state.post.content}
                    </MDBCardText>
                  </MDBCardBody>

                  {/*! COMMENTS */}
                  <MDBCardBody>
                    <MDBCardTitle tag="h5">fhjkasdfh</MDBCardTitle>
                    <MDBCardText className="postText">fadsafsda;fjljk.kjskdafj/</MDBCardText>
                  </MDBCardBody>
                  {/* </Link> */}
                  <MDBCardFooter className="footerBar">
                    <div className="d">
                      <button>
                        <MDBIcon icon="arrow-alt-circle-up" />
                      </button>
                      <br />
                      <button>
                        <MDBIcon icon="arrow-alt-circle-down" />
                      </button>
                    </div>
                    {/* <Link to={`/postdetails/${this.props.el.post_id}`}> */}
                    <button>
                      <i className="fas fa-comment-alt"> Comment</i>
                    </button>
                    {/* </Link> */}
                    <button>
                      <i className="fas fa-share"> Share</i>
                    </button>
                    <i className="fas fa-bookmark"> Save</i>
                    {/* <button>
                    <i class="fas fa-ellipsis-h"></i>
                  </button> */}
                  </MDBCardFooter>
                </MDBCard>
                {/* DUMMIE END */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default connect(null, { updateUserInfo })(PostDetails);
