import React from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../ducks/reducer";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBAnimation,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter
} from "mdbreact";
import "./Dashboard.css";
// import Swal from "sweetalert2";

//! add overlay to header comp
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
    return (
      <div id="dashboardPage">
        <MDBView>
          {/* <MDBMask className="d-flex justify-content-center align-items-center gradient"> */}
          <MDBMask
            className="flex-center d-flex flex-column"
            overlay="red-slight"
          >
            <MDBBtn color="elegant">Create Post</MDBBtn>
            <div className="postContent">
              <MDBContainer>
                <MDBRow>
                  <MDBCol>
                    <MDBAnimation
                      // type="fadeInRight"
                      type="fadeInLeft"
                      delay=".3s"
                    ></MDBAnimation>

                    {/* THIS IS JUST DUMMIE DATA */}
                    <MDBCard className="shadow-box-example hoverable">
                      <MDBCardBody>
                        <MDBCardTitle tag="h5">
                          Thoughts on cold Crashing beers?
                        </MDBCardTitle>
                        <MDBCardText>
                          This is a wider panel with supporting text below as a
                          natural lead-in to additional content. This panel has
                          even longer content than the first to show that equal
                          height action. This is a wider panel with supporting
                          text below as a natural lead-in to additional content.
                          This panel has even longer content than the first to
                          show that equal height action. This is a wider panel
                          with supporting text below as a natural lead-in to
                          additional content. This panel has even longer content
                          than the first to show that equal height action. This
                          is a wider panel with supporting text below as a
                          natural lead-in to additional content. This panel has
                          even longer content than the first to show that equal
                          height action. This is a wider panel with supporting
                          text below as a natural lead-in to additional content.
                          This panel has even longer content than the first to
                          show that equal height action. This is a wider panel
                          with supporting text below as a natural lead-in to
                          additional content. This panel has even longer content
                          than the first to show that equal height action. This
                          is a wider panel with supporting text below as a
                          natural lead-in to additional content. This panel has
                          even longer content than the first to show that equal
                          height action. This is a wider panel with supporting
                          text below as a natural lead-in to additional content.
                          This panel has even longer content than the first to
                          show that equal height action. This is a wider panel
                          with supporting text below as a natural lead-in to
                          additional content. This panel has even longer content
                          than the first to show that equal
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
