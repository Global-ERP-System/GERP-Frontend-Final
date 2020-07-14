import React, { Component } from 'react'
import './FeeStructure.css'
import { DropdownButton, ButtonGroup, Dropdown, Form, FormGroup, CustomInput, Label, Row, Col, Input, Button } from 'react-bootstrap';
import {MDBFormInline} from 'mdbreact';

export default class FeeStructure extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            enroll: "",
            course: "",
            Previousfeestatus: "",
            duefeestatus: "",
            duefeeamount: "",
            lastdatefoduefeeamount: ""
        }
    }
    handlename = (event) => {
        this.setState({ name: event.target.value });
    }
    handleenroll = (event) => {
        this.setState({ enroll: event.target.value });
    }
    handlecourse = (event) => {
        this.setState({ course: event.target.value });
    }
    handlePreviousfeestatus = (event) => {
        this.setState({ Previousfeestatus: event.target.value });
    }
    handleduefeestatus = (event) => {
        this.setState({ duefeestatus: event.target.value });
    }
    handleduefeeamount = (event) => {
        this.setState({ duefeeamount: event.target.value });
    }
    handlelastdateforpayment = (event) => {
        this.setState({ lastdateforpayment: event.target.value });
    }
    handlesubmit = (event) => {
        event.preventDefault();
        this.setState({ name: "" })
        this.setState({ enroll: "" })
        this.setState({ course: "" })
        this.setState({ Previousfeestatus: "" })
        this.setState({ duefeestatus: "" })
        this.setState({ duefeeamount: "" })
        this.setState({ lastdateforpayment: "" })
    }

    render() {
        return (
            <div style={{ marginLeft: "20%", marginRight: "20%", height: "100%", paddingLeft: '10px', paddingRight: '10px'}}>
                <h1 className="Heading" style={{textAlign:"center"}}>Fee Structure</h1>
                <hr style={{ width: '80%' }}></hr>
                <div className="Fee_Structure_Box">
                    <form onSubmit={this.handlesubmit}>
                        <Row>
                            <Col sm={5}>
                                <label style={{ fontWeight: '700' }}>Name:</label>
                            </Col>
                            <Col sm={7}>
                                <input className="form-control" value={this.state.name} onChange={this.handlename} required placeholder="Name" />
                            </Col>

                        </Row>
                        <br></br>
                        <Row>
                            <Col sm={5}>
                                <label style={{ fontWeight: '700' }}>Enrollment No.:</label>
                            </Col>
                            <Col sm={7}>
                                <input className="form-control" value={this.state.enroll} onChange={this.handleenroll} required placeholder="Enrollment No." />
                            </Col>

                        </Row>
                       
                        <br></br>
                        <div className="large_input_box">
                           <div style={{marginLeft:"50%"}}>
                            
                                <MDBFormInline>
                                <select title="Semester" className="form-control" name="Semester" placeholder="Select semester" >
                                    <option >Select semester</option>
                                    <option eventKey="1">I</option>
                                    <option eventKey="2">II</option>
                                </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <select title="Subject Details" className="form-control" name="Subject Details" placeholder="Select subject" >
                                    <option eventKey="1">Subject details</option>
                                    <option eventKey="2">Subject details</option>
                                </select>
                                </MDBFormInline>
                            
                            </div>
                            
                           <br></br>

                        </div>
                        <Row>
                            <Col sm={5}>
                                <label style={{ fontWeight: '700' }}>Course:</label>
                            </Col>
                            <Col sm={7}>
                                <input className="form-control" value={this.state.course}
                                    onChange={this.handlecourse} required placeholder="Course" />
                            </Col>

                        </Row>
                        <br></br>

                        <div >                   
                            <Row>
                                <Col sm={5}>
                                    <p style={{ fontWeight: '700' }}> Previous Fee Status:&nbsp;&nbsp;&nbsp;</p>
                                </Col>
                                <Col sm={7}>
                                    <input className="form-control" value={this.state.Previousfeestatus}
                                        onChange={this.handlePreviousfeestatus} required />
                                </Col>

                            </Row>
                            <br></br>
                            <Row>
                                <Col sm={5}>
                                    <label style={{ fontWeight: '700' }}> Due Fee Status:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                </Col>
                                <Col sm={7}>
                                    <input className="form-control" value={this.state.duefeestatus}
                                        onChange={this.handleduefeestatus} required />
                                </Col>

                            </Row>
                            <br></br>
                            <Row>
                                <Col sm={5}>
                                    <label style={{ fontWeight: '700' }}> Due Fee Amount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                </Col>
                                <Col sm={7}>
                                    <input className="form-control" value={this.state.duefeeamount}
                                        onChange={this.handleduefeeamount} required />
                                </Col>

                            </Row>

                            
                            <br></br>
                            <Row>
                                <Col sm={5}>
                                    <label style={{ fontWeight: '700' }}>Last Date for Payment:</label>
                                </Col>
                                <Col sm={7}>
                                    <input className="form-control" value={this.state.lastdateforpayment}
                                        onChange={this.handlelastdateforpayment} required />
                                </Col>

                            </Row>

                           
                            <br></br>
                        </div>   
                    
                        <div className="Display_Button">
                            <DropdownButton as={ButtonGroup} title="Payment Mode" name="See Details" id="bg-vertical-dropdown-1" variant="primary" className="mx-3">
                                <Dropdown.Item eventKey="1">Subject Details</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Subject Details</Dropdown.Item>
                            </DropdownButton>
                            
                            <input  id="Pay" type="submit" value="Pay" />
                           
                        </div>
                    </form>
                </div >
            </div>
        )
    }
}

