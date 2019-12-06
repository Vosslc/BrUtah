import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../ducks/reducer";
import { Link } from "react-router-dom";
// import axios from "axios";
import {
  // MDBMask,
  MDBRow,
  MDBCol,
  // MDBBtn,
  // MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  // MDBAnimation,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter
  // MDBIcon
} from "mdbreact";

export class Post extends Component {
  // handleChange = (key, value) => {
  //   this.setState({ [key]: value });
  // };

  // toggleCollapse = collapseID => () =>
  //   this.setState(prevState => ({
  //     collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  //   }));

  render() {
    return (
      <div id="postPage">
        <div className="postContent">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBCard className="shadow-box-example hoverable">
                  <Link
                    className="btn stretched-link"
                    to={`/postdetails/${this.props.el.post_id}`}
                  >
                    <MDBCardBody>
                      <MDBCardTitle tag="h5">
                        {this.props.el.title}
                      </MDBCardTitle>
                      <MDBCardText className="postText">
                        {this.props.el.content}
                      </MDBCardText>
                    </MDBCardBody>
                  </Link>
                </MDBCard>
                <MDBCardFooter className="footerBar">
                  <p>Last updated 1 min ago</p>
                  <Link to={`/postdetails/${this.props.el.post_id}`}>
                    <button>
                      <i className="fas fa-comment-alt"> Comment</i>
                    </button>
                  </Link>
                  <button>
                    <i className="fas fa-share"> Share</i>
                  </button>
                  <i className="fas fa-bookmark"> Save</i>
                </MDBCardFooter>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default connect(null, { updateUserInfo })(Post);
