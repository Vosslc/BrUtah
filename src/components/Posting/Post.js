import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../ducks/reducer";
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
  state = {};

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
        <MDBView>
          {/* <MDBMask className="d-flex justify-content-center align-items-center gradient"> */}
          <MDBMask
            className="flex-center d-flex flex-column"
            overlay="red-slight"
          >
            {/* <MDBBtn color="elegant">Create Post</MDBBtn> */}
            <div className="postContent">
              <MDBContainer>
                <MDBRow>
                  <MDBCol>
                    {/* THIS IS JUST DUMMIE DATA */}
                    <MDBCard className="shadow-box-example hoverable">
                      <MDBCardBody>
                        <MDBCardTitle tag="h5">
                          Thoughts on cold Crashing beers?
                        </MDBCardTitle>
                        <MDBCardText className="postText">
                        
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

export default connect(null, { updateUserInfo })(Post);

// import React from 'react'
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBInput  } from 'mdbreact';

// const Post = () => {
//   return (
//     <MDBCol>
//       <MDBCard style={{ width: "22rem" }}>
//         {/* <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves /> */}
//         <MDBCardBody>
//           <MDBCardTitle>Card title</MDBCardTitle>
//           <MDBCardText>
//             What are your thoughts? Post them here.
//           </MDBCardText>
//           <MDBInput type="textarea" label="Post" background />
//           {/* <MDBBtn href="#">MDBBtn</MDBBtn> */}
//         </MDBCardBody>
//       </MDBCard>
//     </MDBCol>
//   )
// }

// export default Post
