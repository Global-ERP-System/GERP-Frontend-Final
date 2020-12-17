// Install Bootstrap Using --> npm install bootstrap
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// then add this path in app.js to use bootstrap

import React, { Component } from 'react'
import './Project.css'
import MainModal from '../../Alert-Modal/submit-modal';

export default class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            link: "",
            chooseFile: "",
            addProject: false
        }
    }
    handletitle = (event) => {
        this.setState({ title: event.target.value });
    }
    handledescription = (event) => {
        this.setState({ description: event.target.value });
    }
    handlelink = (event) => {
        this.setState({ link: event.target.value });
    }
    handlechooseFile = (event) => {
        this.setState({ chooseFile: event.target.value });
    }
    handlesubmit = (event) => {
        event.preventDefault();
        this.setState({ title: "" })
        this.setState({ description: "" })
        this.setState({ link: "" })
        this.setState({ chooseFile: "" })
    }

    render() {


        return (
            <div className="project">
                <h1 style={{ textAlign: 'center', fontFamily: 'Montserrat ', fontWeight: '700' }}> PROJECTS </h1>
                <div className="Project_container" style={{ textAlign: 'center' }}>
                    <form onSubmit={this.handlesubmit} style={{ marginTop: '0px' }}>
                        <label style={{ margin: '0px', width: '100%', fontFamily: 'Pt sans narrow ', fontWeight: '700' }}>Title*</label><br></br>
                        <input style={{ width: '100%', border: '2px solid black' }} type="text" value={this.state.title} onChange={this.handletitle} required /><br></br>

                        <label style={{ margin: '0px', width: '100%', fontFamily: 'Pt sans narrow ', fontWeight: '700' }}>Description</label><br></br>
                        <input style={{ width: '100%', border: '2px solid black' }} type="text" value={this.state.description} onChange={this.handledescription} /><br></br>

                        <label style={{ margin: '0px', width: '100%', fontFamily: 'Pt sans narrow ', fontWeight: '700' }}>Project Link*</label><br></br>
                        <div className="form-group" style={{ display: 'inline' }}>
                            <input style={{ width: '100%' }} type="url" value={this.state.link} onChange={this.handlelink} required />
                            <div style={{ textAlign: "center", paddingTop: '3px', paddingBottom: '5px', fontFamily: 'Pt sans narrow ', fontWeight: '700' }}>or</div>
                            <input style={{ width: '100%', fontFamily: 'Montserrat ', fontWeight: '400', padding: '2px' }} id="chooseFile" type="file" value={this.state.chooseFile}
                                onChange={this.handlechooseFile} required />
                        </div>
                        <MainModal />
                    </form>
                </div>
            </div>
        )
    }
}

