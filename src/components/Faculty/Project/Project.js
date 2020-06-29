import React, { Component } from 'react'
import './Project.css'

class Project extends Component {
    render() {
        return (
            <div>
                <h1 id="relationheading">STUDENT PROJECTS</h1>
                <div id="Your_relation">
                    <div className="projectdetail"><b>&lt; Enrollment Number &gt; </b></div>
                    <div className="projectdetail"><b>&lt;Project Title&gt;</b></div>
                    <div className="projectdetail"><b>&lt;Project Description&gt;</b></div>
                    <div className="projectdetail"><b>&lt;Project Link&gt;</b></div>  
                </div>
            </div>
        )
    }
}
export default Project;
