/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
export default class NotificationNav extends Component {
  render() {
    return (
      <Container
        className={`${this.props.className}`}
        style={this.props.style}
        fluid
      >
        <div>
          <h5 className="pt-3" style={{ textAlign: "center" }}>
            Notifications
          </h5>
        </div>
        <Container
          style={{ listStyleType: "none", backgroundColor: "white" }}
          className=" mb-3"
          fluid
        >
          <marquee direction="up" scrollamount="3">
            <li>
              <a href="#1" style={{ textDecoration: "none" }}>
                Attendance
              </a>
            </li>
            <br />
            <li>
              <a href="#1" style={{ textDecoration: "none" }}>
                Attendance
              </a>
            </li>
            <br />
            <li>
              <a href="#1" style={{ textDecoration: "none" }}>
                Attendance
              </a>
            </li>
            <br />
            <li>
              <a href="#1" style={{ textDecoration: "none" }}>
                Attendance
              </a>
            </li>
            <br />
            <li>
              <a href="#1" style={{ textDecoration: "none" }}>
                Attendance
              </a>
            </li>
            <br />
          </marquee>
        </Container>
      </Container>
    );
  }
}
