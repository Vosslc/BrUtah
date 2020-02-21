import React, { Component } from "react";
// import Clock from "react-clock";
// import TimePicker from "react-time-picker";
// !clock style
import DateTimePicker from "react-datetime-picker";
// !no clock style
// import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';

import "./NpmClockInOut.scss";

export class NpmClockInOut extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  onChange = date => this.setState({ date });

  render() {
    return (
      <div className="npm-clock">
        <p>Current time:</p>
        <div className="clock-container">
          {/* <TimePicker value={this.state.date} /> */}

          <DateTimePicker
            className="clock-content"
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
      </div>
    );
  }
}

export default NpmClockInOut;
