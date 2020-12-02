import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";

const sideDrawer = (props) => {
  return (
    <nav className="side-drawer-nav">
      <p>
        <Link to="/raisereq">Raise a Request</Link>
      </p>
      <p>
        <Link to="/recommendation">Recommendation Badges</Link>
      </p>
      <p>
        <Link to="/relation">My Relations</Link>
      </p>
      <p>
        <Link to="/intern">Internships</Link>
      </p>
    </nav>
  );
};

export default sideDrawer;
