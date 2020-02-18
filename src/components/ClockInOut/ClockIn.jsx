import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import {
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

    function tick() {
      ReactDOM.render(<ClockIn />, document.getElementById("clock"));
    }
    setInterval(tick, 1000);
    console.log(tick, "tick");

    return (
      <div id="clock">
        <div className="clock-content">
          <MDBContainer>
            <MDBCard className="shadow-box-example clock-current-in-out">
              <MDBCardBody>
                <MDBCardTitle className="post-title">
                  Current Time
                  <MDBCardText className="postText" tag="h5">
                    {" "}
                    {rightNow}{" "}
                  </MDBCardText>
                </MDBCardTitle>

                <MDBCardTitle className="post-title">
                  Current Time
                  <MDBCardText className="postText" tag="h5">
                    {" "}
                    {rightNow}{" "}
                  </MDBCardText>
                </MDBCardTitle>
                <hr />
              </MDBCardBody>
            </MDBCard>

            <MDBCardFooter className="footerBar d-flex justify-content-around">
              <MDBBtn color="dark-green">Clock-In</MDBBtn>
              <MDBBtn color="warning">Clock-Out</MDBBtn>
            </MDBCardFooter>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default ClockIn;
