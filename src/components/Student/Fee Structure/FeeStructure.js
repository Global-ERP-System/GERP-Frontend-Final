import React, { Component } from 'react'
import './FeeStructure.css'
import { DropdownButton, ButtonGroup, Dropdown, Row, Col } from 'react-bootstrap';

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
            <div className='cont'>
                <h1 className="Heading" style={{ textAlign: "center", fontFamily: 'Montserrat', fontWeight: '700' }}>Fee Structure</h1>
                <hr style={{ width: '80%' }}></hr>
                <form onSubmit={this.handlesubmit} style={{ marginTop: '0px' }}>
                    <Row>
                        <Col sm={5}>
                            <label style={{ fontFamily: 'Pt sans narrow ', fontWeight: '700' }}>Name:</label>
                        </Col>
                        <Col sm={7}>
                            <input className="form-control" value={this.state.name} onChange={this.handlename} required placeholder="Name" style={{ fontFamily: 'Montserrat Regular', fontWeight: '400' }} />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={5}>
                            <label style={{ fontFamily: 'Pt sans narrow ', fontWeight: '700' }}>Enrollment No.:</label>
                        </Col>
                        <Col sm={7}>
                            <input className="form-control" value={this.state.enroll} onChange={this.handleenroll} required placeholder="Enrollment No." style={{ fontFamily: 'Montserrat Regular', fontWeight: '400' }} />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={5}>
                            <label style={{ fontFamily: 'Pt sans narrow ', fontWeight: '700' }}>Semester:</label>
                        </Col>
                        <Col sm={7}>
                            <select title="Semester" className="form-control" name="Semester" placeholder="Select semester" style={{ fontFamily: 'Montserrat Regular', fontWeight: '400' }}>
                                <option >Select semester</option>
                                <option eventKey="1">I</option>
                                <option eventKey="2">II</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}>
                            <label style={{ fontFamily: 'Pt sans narrow ', fontWeight: '700' }}>Sunject:</label>
                        </Col>
                        <Col sm={7}>
                            <select title="Subject Details" className="form-control" name="Subject Details" placeholder="Select subject" style={{ fontFamily: 'Montserrat Regular', fontWeight: '400' }}>
                                <option eventKey="1">Subject details</option>
                                <option eventKey="2">Subject details</option>
                            </select>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={5}>
                            <label style={{ fontFamily: 'Pt sans narrow ', fontWeight: '700' }}>Course:</label>
                        </Col>
                        <Col sm={7}>
                            <input className="form-control" value={this.state.course}
                                onChange={this.handlecourse} required placeholder="Course" style={{ fontFamily: 'Montserrat Regular', fontWeight: '400' }} />
                        </Col>
                    </Row>
                    <br></br>
                    <div >
                        <Row>
                            <Col sm={5}>
                                <p style={{ fontFamily: 'Pt sans narrow ', fontWeight: '700' }}> Previous Fee Status:&nbsp;&nbsp;&nbsp;</p>
                            </Col>
                            <Col sm={7}>
                                <input className="form-control" value={this.state.Previousfeestatus}
                                    onChange={this.handlePreviousfeestatus} required style={{ fontFamily: 'Montserrat Regular', fontWeight: '400' }} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col sm={5}>
                                <label style={{ fontFamily: 'Pt sans narrow ', fontWeight: '700' }}> Due Fee Status:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            </Col>
                            <Col sm={7}>
                                <input className="form-control" value={this.state.duefeestatus}
                                    onChange={this.handleduefeestatus} required style={{ fontFamily: 'Montserrat Regular', fontWeight: '400' }} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col sm={5}>
                                <label style={{ fontFamily: 'Pt sans narrow ', fontWeight: '700' }}> Due Fee Amount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            </Col>
                            <Col sm={7}>
                                <input className="form-control" value={this.state.duefeeamount}
                                    onChange={this.handleduefeeamount} required style={{ fontFamily: 'Montserrat Regular', fontWeight: '400' }} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col sm={5}>
                                <label style={{ fontFamily: 'Pt sans narrow ', fontWeight: '700' }}>Last Date for Payment:</label>
                            </Col>
                            <Col sm={7}>
                                <input className="form-control" value={this.state.lastdateforpayment}
                                    onChange={this.handlelastdateforpayment} required style={{ fontFamily: 'Montserrat Regular', fontWeight: '400' }} />
                            </Col>
                        </Row>
                        <br></br>
                    </div>
                    <div className="Display_Button">
                        <DropdownButton id="dropdown-item-button" title="Payment Mode" style={{ width: '150px' }} >
                            <Dropdown.Item as="button">Subject Details</Dropdown.Item>
                            <Dropdown.Item as="button">Subject Details</Dropdown.Item>
                        </DropdownButton>

                        <button id="Pay" type="submit" className="btn">Pay</button>
                    </div>
                </form>
                <br></br>
                <div id="year1">
                    <div className="SearchPeople">&lt;Year&gt; </div>
                    <div className="SearchPeople">&lt;College_Name&gt;</div>
                    <div className="SearchPeople">&lt;Amount&gt;</div>
                    <div className="SearchPeople">&lt;Status&gt;
                    <p>Paid</p>
                    </div>
                    <div className="SearchPeople"> <button style={{ color: "white", backgroundColor: '#25a0f7' }} type="submit" className="btn">View Receipt</button></div>
                </div>
                <br></br>
                <div id="year1">
                    <div className="SearchPeople">&lt;Year&gt; </div>
                    <div className="SearchPeople">&lt;College_Name&gt;</div>
                    <div className="SearchPeople">&lt;Amount&gt;</div>
                    <div className="SearchPeople">&lt;Status&gt;
                    <p>Paid</p>
                    </div>
                    <div className="SearchPeople"> <button style={{ color: "white", backgroundColor: '#25a0f7' }} type="submit" className="btn">View Receipt</button></div>
                </div>
                <br></br>
                <div id="year1">
                    <div className="SearchPeople">&lt;Year&gt; </div>
                    <div className="SearchPeople">&lt;College_Name&gt;</div>
                    <div className="SearchPeople">&lt;Amount&gt;</div>
                    <div className="SearchPeople"><button id="connectdecline" style={{ backgroundColor: 'green', marginTop: '6%' }}>
                        Pay Now</button></div>
                    <div className="SearchPeople"> <button style={{ color: "white", backgroundColor: '#25a0f7' }} type="submit" className="btn">View Receipt</button></div>
                </div>
                <br></br>
                <div id="year1">
                    <div className="SearchPeople">&lt;Year&gt; </div>
                    <div className="SearchPeople">&lt;College_Name&gt;</div>
                    <div className="SearchPeople">&lt;Amount&gt;</div>
                    <div className="SearchPeople"><button id="connectdecline" style={{ backgroundColor: 'green', marginTop: '6%' }}>
                        Pay Now</button></div>
                    <div className="SearchPeople"> <button style={{ color: "white", backgroundColor: '#25a0f7' }} type="submit" className="btn">View Receipt</button></div>
                </div>
                <br></br>
            </div>
        )
    }
}

