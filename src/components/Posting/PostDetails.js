import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateComment,
  updatePostInput,
  updatePostTitle,
  updateUserInfo,
  clearState
} from "../../ducks/reducer";
import axios from "axios";

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
  MDBIcon,
  MDBInput
} from "mdbreact";
import Comment from "../Comments/Comment";
// import { isArgumentPlaceholder } from "@babel/types";

export class PostDetails extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
      comments: [],
      isEditing: false
      // profile_img
    };
    // console.log("this is state for comments", this.state.comments);
  }
  //! ****LIFECYCLE METHODS**** //
  componentDidMount() {
    this.getSelectedPost();
    // this.getAllComments();
    this.getAllCommentsForPost();
  }

  //! ****AXIOS SERVER CALLS**** //
  getSelectedPost() {
    // console.log("p", this.props.match);
    axios.get(`/api/post/${this.props.match.params.id}`).then(response => {
      // console.log("res", response);
      //* '/postdetails/:id' in routes.js is match.params which being passed down by react router.
      const selectedPost = response.data[0];
      this.setState({
        post: selectedPost
      });
      // console.log("this is state for POST", this.state.post);
    });
  }
  editPost() {
    axios.put(`/api/post/${this.state.post.post_id}`, {
      createInput: this.props.createInput,
      createTitle: this.props.createTitle
    })
    .then(res => {
      this.props.clearState();
      this.setState({isEditing: false});
      this.getSelectedPost();
    });
  }

  deletePost() {
    axios.delete(`/api/post/${this.state.post.post_id}`).then(this.props.history.push("/dashboard"))
  }

  //! ***AXIOS COMMENT CALLS*** //
  getAllCommentsForPost() {
    axios.get(`/api/comment/${this.props.match.params.id}`).then(response => {
      console.log("res", response);

      const allComments = response.data;
      this.setState({
        comments: allComments
      });
      console.log("this is state for comments", this.state.comments);
    });
  }
  // getAllComments() {
  //   axios.get("/api/comment").then(response => {
  //     // console.log("res", response);
  //     const allComments = response.data;
  //     this.setState({
  //       comments: allComments
  //     });
  //     // console.log("this is state for comments", this.state.comments);
  //   });
  // }

  addNewComment() {
    console.log("PROPS", this.props);
    axios
      .post("/api/comment", {
        createComment: this.props.createComment,
        post_id: this.state.post.post_id
      })
      .then(res => {
        this.props.clearState();
      });
  }

  render() {
    const { updateComment, updatePostInput, updatePostTitle } = this.props;
    const { isEditing } = this.state;
    return (
      <div id="postPage">
        <MDBView className="postContainer">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBCard className="shadow-box-example hoverable">
                  {/* <Link className="btn stretched-link" to={`/postdetails/${this.props.el.post_id}`}> */}
                  {!isEditing ? (
                    <MDBCardBody>
                      <MDBCardTitle tag="h5">
                        {this.state.post.title}
                        {/* {console.log("hit", this.state.post)} */}
                      </MDBCardTitle>

                      <MDBCardText>{this.state.post.content}</MDBCardText>
                    </MDBCardBody>
                  ) : (
                    <MDBCardBody>
                      <MDBCardTitle tag="h5">
                        <input
                          type="text"
                          id="example3"
                          className="form-control form-control-sm"
                          placeholder="Title"
                          value={this.props.createTitle}
                          name="title"
                          onChange={e => updatePostTitle(e.target.value)}
                        />
                        <MDBInput
                          // className="white-text "
                          // iconClass="white-text"
                          // icon="pencil-alt"
                          type="textarea"
                          label="Editing Post?"
                          outline
                          value={this.props.createInput}
                          name="input"
                          onChange={e => updatePostInput(e.target.value)}
                        ></MDBInput>
                        {/* {console.log("hit", this.state.post)} */}
                      </MDBCardTitle>
                      <MDBBtn
                        onClick={() => this.editPost()}
                        color="indigo"
                        className="post-btn"
                        size="sm"
                      >
                        Edit Post
                      </MDBBtn>
                      <MDBBtn
                        onClick={() =>
                          this.setState({
                            isEditing: false
                          })
                        }
                        color="indigo"
                        className="cancel"
                        size="sm"
                      >
                        Cancel
                      </MDBBtn>

                      <MDBBtn
                        onClick={() => {
                          this.deletePost()
                          this.setState({
                            isEditing: false
                          })
                        }}
                        outline
                        color="danger"
                        className="delete"
                        size="sm"
                      >
                        Delete Post
                      </MDBBtn>
                    </MDBCardBody>
                  )}

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
                    <button
                      onClick={() => {
                        console.log(this.state.post)
                        updatePostInput(this.state.post.content);
                        updatePostTitle(this.state.post.title);
                        this.setState({
                          isEditing: true
                        });
                      }}
                    >
                      <MDBIcon icon="edit" />
                      Edit
                    </button>
                  </MDBCardFooter>

                  {/* COMMENT INPUT FIELD */}

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
                        value={this.props.createComment}
                        name="input"
                        onChange={e => updateComment(e.target.value)}
                      ></textarea>
                    </div>
                    <MDBBtn
                      outline
                      color="default"
                      size="sm"
                      onClick={() => this.addNewComment()}
                    >
                      Comment
                      <MDBIcon icon="pencil-alt" className="ml-1" />
                    </MDBBtn>
                    <br />
                    <hr />
                    <MDBCardTitle tag="h5">Comments...</MDBCardTitle>

                    {this.state.comments.map((el, index) => (
                      <Comment
                        el={el}
                        index={index}
                        key={el.comment_id}
                        remove={this.deleteComment}
                      />
                    ))}
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

function mapStateToProps(state) {
  const { createComment, createInput, createTitle } = state;

  return {
    createComment,
    createInput,
    createTitle
    // profile_img
  };
}

export default connect(mapStateToProps, {
  updateComment,
  updatePostInput,
  updatePostTitle,
  updateUserInfo,
  clearState
})(PostDetails);
