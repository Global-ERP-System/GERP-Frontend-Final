import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
const sideDrawerFaculty = (props) => {
  return (
    <nav className="side-drawer-nav">
      <p onClick={props.hide}>
        <Link to="/communityf">Home</Link>
      </p>
      <p onClick={props.hide}>
        <Link to="/raisereqf">Raise a Request</Link>
      </p>
      <p onClick={props.hide}>
        <Link to="/leavesf">Leaves</Link>
      </p>
      <p onClick={props.hide}>
        <Link to="/salaryf">Salary</Link>
      </p>
      <p onClick={props.hide}>
        <Link to="/feedbackf">View Feedback</Link>
      </p>
      <p onClick={props.hide}>
        <Link to="appreciationf">Appreciation Badges</Link>
      </p>
      <p onClick={props.hide}>
        <Link to="/relationf">My Relations</Link>
      </p>
      <p onClick={props.hide}>
        <Link to="/internshipf">Student Internships</Link>
      </p>
    </nav>
  );
};

export default sideDrawerFaculty;
