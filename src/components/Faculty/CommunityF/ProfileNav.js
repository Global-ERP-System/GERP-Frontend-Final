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
          <span style={{ fontWeight: "bold" }}>Mr. Sumit Goel</span>
          <br />
          <span>20+ yrs experience in teaching Operating Systems.</span>
          <br />
          <span>IIT Delhi, Delhi</span>
          <br />
          <span>Dec 2019- Present</span>
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
