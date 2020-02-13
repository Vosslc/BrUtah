import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn
} from "mdbreact";
import "./ClockIn.scss";

export class ClockIn extends Component {


  render() {
    const date = new Date();
    // const hours = date.getHours();
    const rightNow = date.toLocaleTimeString();

    function tick () {
      ReactDOM.render(<ClockIn />, document.getElementById("clock"))
    }
    setInterval(tick, 1000);
    console.log(tick, "tick")
    

    return (
      
      <div id="clock">
        <div className="clock-content">
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBCard className="shadow-box-example hoverable">
                  
                    <MDBCardBody>
                      <MDBCardTitle
                        className="post-title text-left"
                        tag="h5"
    > {rightNow} </MDBCardTitle>
                      <hr />
                      <MDBCardText className="postText text-left"></MDBCardText>
                    </MDBCardBody>
                  
                </MDBCard>
                <MDBCardFooter className="footerBar">
                  <MDBBtn color="dark-green">C l o c k-In</MDBBtn>
                  <MDBBtn color="warning">C l o c k-Out</MDBBtn>
                </MDBCardFooter>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
    }
}

export default ClockIn;
