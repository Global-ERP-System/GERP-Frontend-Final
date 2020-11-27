import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import './Project.css'

export default class NewApplicationDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            link: ""
        }
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
                            Application Number: 123456
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="NewApplicationDetails_container">
                                <label >Name: &nbsp; </label><br></br>
                                <div className="NewApplication_Value">    </div>
                            </div>
                            <div className="NewApplicationDetails_container">
                                <label >Age: &nbsp; </label><br></br>
                                <div className="NewApplication_Value">    </div>
                            </div>
                            <div className="NewApplicationDetails_container">
                                <label >Phone No.: &nbsp; </label><br></br>
                                <div className="NewApplication_Value">    </div>
                            </div>
                            <div className="NewApplicationDetails_container">
                                <label >Email: &nbsp; </label><br></br>
                                <div className="NewApplication_Value">    </div>
                            </div>
                            <div className="NewApplicationDetails_container">
                                <label >Previous Work: &nbsp; </label><br></br>
                                <div className="NewApplication_Value">    </div>
                            </div>
                            <div className="NewApplicationDetails_container">
                                <label >Experiance: &nbsp; </label><br></br>
                                <div className="NewApplication_Value">    </div>
                            </div>
                            <div className="NewApplicationDetails_container">
                                <label >Post Applied: &nbsp; </label><br></br>
                                <div className="NewApplication_Value">    </div>
                            </div>
                            <div className="NewApplicationDetails_container">
                                <label >Educational Status: &nbsp; </label><br></br>
                                <div className="NewApplication_Value">   </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
