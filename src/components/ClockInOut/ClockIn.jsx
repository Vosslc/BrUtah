import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
import {
  MDBCol,
  MDBRow,
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
  
  // const date = new Date();
    // // const hours = date.getHours();
    // const rightNow = date.toLocaleTimeString();

    // function tick() {
    //   ReactDOM.render(<ClockIn />, document.getElementById("clock"));
    // }
    // setInterval(tick, 1000);
    // console.log(tick, "tick");
    return (
      <div id="clock">
        <div className="clock-content">
          <MDBContainer className="d-flex justify-content-around">
            <MDBRow>
              {/* CURRENT-TIME */}
              <MDBCol>
                <MDBCard className="clock-current-card">
                  <MDBCardBody className="clock-current-body">
                    <div className="current-time">
                      <MDBCardTitle>Current Time:</MDBCardTitle>
                      {/* <MDBCardText tag="h5"> {rightNow} </MDBCardText> */}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              {/*-----*/}
              {/* CLOCK-IN */}
              <MDBCol>
                <MDBCard className=" clock-in-card">
                  <MDBCardBody className="clock-in-body">
                    <div className="clock-in">
                      <MDBCardTitle>Clocked In:</MDBCardTitle>
                      {/* <MDBCardText tag="h5"> {rightNow} </MDBCardText> */}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              {/*-----*/}
              {/* CLOCK-OUT */}
              <MDBCol>
                <MDBCard className=" clock-out-card">
                  <MDBCardBody className="clock-clock-out-body">
                    <div className="clock-out">
                      <MDBCardTitle>Clocked out:</MDBCardTitle>
                      {/* <MDBCardText tag="h5"> {rightNow} </MDBCardText> */}
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              {/*-----*/}
            </MDBRow>
          </MDBContainer>
          {/* FOOTER */}

          <div className="d-flex justify-content-center btns-in-out">
            <MDBBtn color="dark-green">Clock-In</MDBBtn>
            <MDBBtn color="warning">Clock-Out</MDBBtn>
          </div>
        </div>
      </div>
    );
  }
}

export default ClockIn;
