import React, { Component } from "react";

import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class MyScheduleNav extends Component {
  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <FontAwesomeIcon icon={faCalendarCheck} size="3x" />
          <h5 className="m-2">My Schedule</h5>
        </div>
        <div className="mt-3" style={{ textAlign: "center" }}>
          <p>Monday class at 3PM</p>
        </div>
      </div>
    );
  }
}
