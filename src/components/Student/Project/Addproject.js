import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
import './Project.css'

export default class Addproject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            link: ""
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
    handlesubmit = (event) => {
        event.preventDefault();
        this.setState({ title: "" })
        this.setState({ description: "" })
        this.setState({ link: "" })
    }
    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" className="Add_ProjectHeading">
                            ADD PROJECT
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="Add_Project_container">
                                <form onSubmit={this.handlesubmit}>
                                    <label >Title*</label><br></br>
                                    <input type="text" style={{width:'100%'}} value={this.state.title} onChange={this.handletitle} required /><br></br>
                                    <label >Description</label><br></br>
                                    <input type="text" style={{width:'100%'}} value={this.state.description} onChange={this.handledescription} /><br></br>
                                    <label >Project Link*</label><br></br>
                                    <input type="url" value={this.state.link}
                                        onChange={this.handlelink} required /><br></br>
                                    <input id="Save_AddProject" type="submit" value="Save" />
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
