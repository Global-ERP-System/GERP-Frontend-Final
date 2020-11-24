// Install Bootstrap Using --> npm install bootstrap
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// then add this path in app.js to use bootstrap

import React, { Component } from 'react'
import NewApplicationDetails from './NewApplicationDetails'
import './NewApplication.css'
// import { Button } from 'react-bootstrap';

export default class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addProject: false
        }
    }

    render() {

        let NewApplicationDetail = () => this.setState({ NewApplicationDetails: false })

        return (
            <div>
                <h1 className="Heading">New Application</h1>
                <div className="Container">
                    <div className="Project_container">
                        <div className="Display_Button">
                            <label>&lt;Name_of_Applicant&gt;</label>
                            <button id="Open" onClick={() =>
                                this.setState({ NewApplicationDetails: true })}> Open</button><br></br>
                        </div>
                    </div>
                    <NewApplicationDetails
                        show={this.state.NewApplicationDetails}
                        onHide={NewApplicationDetail} />
                </div>
            </div>
        )
    }
}
