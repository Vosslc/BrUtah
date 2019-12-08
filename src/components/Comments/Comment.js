import React, { Component } from "react";

import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon
} from "mdbreact";

export class Comment extends Component {
  render() {
    return (
      <div>
        <MDBContainer className="commentText">
          <MDBRow>
            <MDBCol>

                {/* <Link className="btn stretched-link" to={`/postdetails/${this.props.el.post_id}`}> */}
                <MDBCardBody>
                  <MDBCardText>{this.props.el.comment_content}</MDBCardText>
                </MDBCardBody>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Comment;
