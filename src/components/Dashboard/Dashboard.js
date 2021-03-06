import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../ducks/reducer";
import { Link } from "react-router-dom";
import axios from "axios";
// import { BrowserRouter as Router } from "react-router-dom";
import {
  // MDBBtn,
  MDBMask,
  MDBView,
  MDBContainer
} from "mdbreact";
import Post from "../Posting/Post";
import "../Posting/Post.css";
// import { PostDetails } from "../Posting/PostDetails";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      postList: []
    };
  }

  // ****AXIOS SERVER CALLS**** //

  componentDidMount() {
    this.getAllPost();
  }

  componentDidUpdate(prevProps) {
    // console.log("1", prevProps);
    // console.log("2", this.props);
    // console.log("3", this.props.location);
    if (this.props.location.state && this.props.location.state.from) {
      // if (this.props.location.state.from === "/CreatePost")
      if (this.props.location.state.from !== prevProps.location.state.from) {
        this.getAllPost();
      }
    }
    // if (prevProps.match.path !== this.props.match.path) {
    // }
  }

  getAllPost() {
    axios.get("/api/post").then(response => {
      const allPost = response.data;
      this.setState({
        postList: allPost
      });
    });
    // window.location.reload(true);
  }

  // deletePost(id) {
  //   axios.delete(`/api/post/${id}`).then(response => {
  //     this.setState({
  //       postList: response.data
  //     });
  //   });
  // }

  render() {
    return (
      <div id="dashboardPage">
        <MDBView>
          <MDBContainer>
            {/* <MDBMask className="d-flex flex-column "> */}
            <div className="dashboard-card card">
              <div className="card-body">
                <Link to="/CreatePost">
                  <input
                    className="form-control bg-light"
                    type="text"
                    placeholder="Create Post"
                    readOnly
                  ></input>
                </Link>
              </div>
            </div>
            {/* <MDBBtn className="createBtn" color="elegant">Create Post</MDBBtn> */}
            {this.state.postList.map((el, index) => (
              <Post
                el={el}
                index={index}
                key={el.post_id}
                // remove={this.deletePost}
              />
            ))}
            {/* </MDBMask> */}
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default connect(null, { updateUserInfo })(Dashboard);
