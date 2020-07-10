// Install Bootstrap Using --> npm install bootstrap
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// then add this path in app.js to use bootstrap

import React, { Component } from 'react'
import Addproject from './Addproject'
import { Button } from 'react-bootstrap';
import './Project.css'

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

        let addProject = () => this.setState({ addProject: false })

        return (
            <div style={{marginLeft:'30%',marginRight:'20%', marginBottom:'13%'}}>
        {/* <div style={{marginLeft:'33%',marginRight:'20%', marginBottom:'4%', width:'180%'}}> 
                <h1 className="Heading" style={{width:'22%',textAlign:'center'}}> PROJECTS </h1> */}
                <h1 className="Heading" style={{textAlign:'center'}}> PROJECTS </h1>
                <div className="Container">
                    <div className="Project_container">
                        <form onSubmit={this.handlesubmit}>
                            <label style={{margin:'0px',width:'100%'}}>Title*</label><br></br>
                            <input style={{width:'100%'}} type="text" value={this.state.title} onChange={this.handletitle} required /><br></br>
                            
                            <label style={{margin:'0px', width:'100%'}}>Description</label><br></br>
                            <input style={{width:'100%'}} type="text" value={this.state.description} onChange={this.handledescription} /><br></br>
                            
                            <label style={{margin:'0px', width:'100%'}}>Project Link*</label><br></br>
                                <div className="form-group" style={{display:'inline'}}> 
                                    <input style={{width:'100%'}} type="url" value={this.state.link} onChange={this.handlelink} required />
                                    <div style={{textAlign:"center"}}>or</div>
                                    <input style={{width:'100%'}} id="chooseFile" type="file" value={this.state.chooseFile}
                                        onChange={this.handlechooseFile} required />
                                </div>
                            <Button style={{ margin:'auto',marginTop:'20px', display:'block'}} onClick={() =>this.setState({ addProject: true })}>+ Add Project</Button>
                        </form>
                    </div>
                    <Addproject
                        show={this.state.addProject}
                        onHide={addProject} />
                </div>
            </div>
        )
    }
}
        
// submit ke place pr save aayega
// Save Button Chota krna hai -- DONE
// Close button hatana hai--DONE
// +Add Project button chota krna hai--DONE
// label ke niche ka margin hatana hai 
//className="btn btn-primary my-3 mx-2 w-25 p-3"--NOT NEEDED
