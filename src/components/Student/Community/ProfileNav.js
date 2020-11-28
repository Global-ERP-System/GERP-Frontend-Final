import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProfileNav extends Component {
  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        <div className="profile-block">
          <div className="profile-circle p-2">
            <img
              alt=""
              src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg"
              style={{ borderRadius: "60%", width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="profile-nav-info m-3 mt-4 ">
          <span style={{ fontWeight: "bold" }}>Abhimanyu Singh</span>
          <br />
          <span>Dabur India Pvt. Ltd</span>
          <br />
          <span>IIM Lucknow, Lucknow, India</span>
          <br />
          <span>abhi@gmail.com</span>
          <br />

          <p style={{ color: "rgb(69,97,157)" }}>230 connections</p>
          <img
            alt="img"
            src="https://toppng.com/uploads/preview/gold-badge-png-11552734724wixvd59trm.png"
            style={{ width: "30px" }}
          ></img>
          <span style={{ color: "rgb(69,97,157)" }}>
            84 Recommendation Badges
          </span>
          <br />
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Link
              to="/profile"
              style={{
                textDecoration: "none",
                fontSize: "small",
              }}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
