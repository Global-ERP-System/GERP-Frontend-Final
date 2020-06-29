import React, { Component } from 'react'
import './FeeStructure.css'
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';
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
            <div style={{marginLeft:"25%",marginRight:"25%",height:"100%"}}>
                <br></br>
                <h1 className="Heading" style={{textAlign:"center"}}>Fee Structure</h1>
                <br></br>
                <div className="Fee_Structure_Box">
                    <form onSubmit={this.handlesubmit}>
                        <div className="large_input_box">
                            <input className="form-control" value={this.state.name} onChange={this.handlename} required placeholder="Name" /><br></br>
                            <input className="form-control" value={this.state.enroll} onChange={this.handleenroll} required placeholder="Enrollment No." /><br></br>

                            <div style={{marginRight:"25%",marginLeft:"25%"}}>
                            
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
                            <br/>
                            <input className="form-control"  value={this.state.course}
                                onChange={this.handlecourse} required placeholder="Course" /><br></br>

                        </div>

                        <div >                   
                            <label> Previous Fee Status:&nbsp;&nbsp;&nbsp;</label>
                            <input className="form-control" value={this.state.Previousfeestatus}
                                onChange={this.handlePreviousfeestatus} required /><br></br>


                            <label >Due Fee Status:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <input className="form-control" value={this.state.duefeestatus}
                                onChange={this.handleduefeestatus} required /><br></br>

                            <label >Due Fee Amount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <input className="form-control" value={this.state.duefeeamount}
                                onChange={this.handleduefeeamount} required /><br></br>

                            <label >Last Date for Payment:</label>
                            <input className="form-control" value={this.state.lastdateforpayment}
                                onChange={this.handlelastdateforpayment} required /><br></br>
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

