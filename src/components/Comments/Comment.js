import React, { Component } from "react";

export class Comment extends Component {
  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBCard className="shadow-box-example hoverable">
                {/* <Link className="btn stretched-link" to={`/postdetails/${this.props.el.post_id}`}> */}
                <MDBCardBody>
                  <MDBCardTitle tag="h5">Comments...</MDBCardTitle>
                  <MDBCardText className="postText">
                    {/* {this.state.comments[0]} */}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Comment;
