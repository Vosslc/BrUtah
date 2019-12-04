import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../ducks/reducer";
// import axios from 'axios';
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
  MDBCardFooter
} from "mdbreact";
// import "./Post.css";

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
        {/* <MDBView> */}
          {/* <MDBMask className="d-flex justify-content-center align-items-center gradient"> */}
            {/* <MDBBtn color="elegant">Create Post</MDBBtn> */}
            <div className="postContent">
              <MDBContainer>
                <MDBRow>
                  <MDBCol>
                    {/* THIS IS JUST DUMMIE DATA */}
                    <MDBCard className="shadow-box-example hoverable">
                      <MDBCardBody>
                        <MDBCardTitle tag="h5">
                          {this.props.el.title}
                        </MDBCardTitle>
                        <MDBCardText className="postText">
                          {this.props.el.content}
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                    <MDBCardFooter small muted>
                      Last updated 3 mins ago
                    </MDBCardFooter>
                    {/* DUMMIE END */}
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>

        {/* </MDBView> */}
      </div>
    );
  }
}

export default connect(null, { updateUserInfo })(Post);
