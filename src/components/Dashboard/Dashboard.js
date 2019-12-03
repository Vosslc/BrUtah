import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../ducks/reducer";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";
import {
  // MDBBtn,
  MDBView
} from "mdbreact";
import Post from "../Posting/Post";
import "../Posting/Post.css";
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
    axios.get("/api/post").then(response => {
      const allPost = response.data;
      this.setState({
        postList: allPost
      });
    });
  }

  deletePost(id){
    axios.delete(`/api/post/${id}`).then(response => {
      this.setState({
        postList: response.data
      })
    })
  }

  render() {
    return (
      <div id="dashboardPage">
        <MDBView>
          {/* <MDBBtn className="createBtn" color="elegant">Create Post</MDBBtn> */}
          {this.state.postList.map((el, index) =>(
            <Post 
              el={el}
              index={index}
              key={el.id}
              remove={this.deletePost}
            />

          ))}
        </MDBView>
      </div>
    );
  }
}

export default connect(null, { updateUserInfo })(Dashboard);
