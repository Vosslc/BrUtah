import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBInput  } from 'mdbreact';

const Post = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        {/* <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves /> */}
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            What are your thoughts? Post them here.
          </MDBCardText>
          <MDBInput type="textarea" label="Post" background />
          {/* <MDBBtn href="#">MDBBtn</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Post
