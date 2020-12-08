import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    return (
      <div className="ProjectF">
        <div className="student-projects-table">
          <h1>STUDENT PROJECTS</h1>
          <div className="student-project">
            <div className="projectdetail">
              <h5> Enrollment Number </h5>
            </div>
            <div className="projectdetail">
              <h5>Project Title</h5>
            </div>
            <div className="projectdetail">
              <h5>Project Description</h5>
            </div>
            <div className="projectdetail">
              <h5>Project Link</h5>
            </div>
          </div>

          <div className="student-project">
            <div className="projectdetail">
              <h5> Enrollment Number </h5>
            </div>
            <div className="projectdetail">
              <h5>Project Title</h5>
            </div>
            <div className="projectdetail">
              <h5>Project Description</h5>
            </div>
            <div className="projectdetail">
              <h5>Project Link</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
