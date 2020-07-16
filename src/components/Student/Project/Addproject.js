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
                    centered >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" className="Add_ProjectHeading" style={{fontFamily:'Montserrat Bold', fontWeight:'700'}}>
                            ADD PROJECT </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{background:'whitesmoke'}}>
                        <div className="container" style={{padding:'0px', margin:'0px'}}>
                            <div className="Add_Project_container">
                                <form onSubmit={this.handlesubmit}>
                                    <label style={{fontFamily:'Pt sans narrow bold', fontWeight:'700'}}>Title*</label>
                                    <input type="text" style={{width:'100%',border:'2px solid black'}} value={this.state.title} onChange={this.handletitle} required /><br></br>
                                    <label  style={{fontFamily:'Pt sans narrow bold', fontWeight:'700'}}>Description</label>
                                    <input type="text" style={{width:'100%',border:'2px solid black'}} value={this.state.description} onChange={this.handledescription} /><br></br>
                                    <label  style={{fontFamily:'Pt sans narrow bold', fontWeight:'700'}}>Project Link*</label>
                                    <input type="url" style={{border:'2px solid black', borderRadius:'3px'}}  value={this.state.link}
                                        onChange={this.handlelink} required /><br></br>
                                   {/* <input id="Save_AddProject" type="submit" value="Save" /> */}
                                   <Button style={{marginTop:'20px', background:'red'}}>Save</Button>
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
