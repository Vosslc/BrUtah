import React from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../ducks/reducer";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";
import {
  // MDBMask,
  // MDBRow,
  // MDBCol,
  MDBBtn,
  MDBView
  // MDBContainer,
  // MDBCard,
  // MDBCardBody,
  // MDBAnimation,
  // MDBCardTitle,
  // MDBCardText,
  // MDBCardFooter
} from "mdbreact";
import Post from "../Posting/Post";
import "../Posting/Post.css";
import "./Dashboard.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div id="dashboardPage">
        <MDBView>
          {/* <MDBBtn className="createBtn" color="elegant">Create Post</MDBBtn> */}
          <Post />
        </MDBView>
      </div>
    );
  }
}

export default connect(null, { updateUserInfo })(Dashboard);
