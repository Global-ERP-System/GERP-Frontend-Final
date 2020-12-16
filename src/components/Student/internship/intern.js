import React, { Component } from "react";
import {Form,FormGroup,CustomInput,Label,Row,Col,Input} from 'reactstrap';
import './intern.css'

class Intern extends Component {
    render() {
        return (
            <div className="bodyintern">
                <center>
                    <h1 style={{ fontFamily: 'Montserrat', fontWeight: '700' }}>INTERNSHIPS</h1>
                  </center>
                <Form>
                    <Row className="internrow">
                    <Col sm={4}>
                            <legend className="col-form-label" style={{ fontFamily: 'Pt sans narrow', fontWeight: 'bold' }}>Currently Available :</legend>
                    </Col>
                    <Col sm={3}>
                        <FormGroup check inline>
                            <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            Yes
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup check inline>
                            <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            No
                            </Label>
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row className="internrow">
                        <Col sm={4}>
                              <Label for="preferences">Preferences :</Label><br />
                        </Col>
                        <Col sm={6}>
                            <input className="form-control" placeholder="Preferences" />
                        </Col>
      
                    </Row>


                    <Row className="internrow">
                        <Col sm={4}>

                            <Label for="skills">Skills :</Label><br />


                        </Col>
                        <Col sm={6}>
                            <input className="form-control" placeholder="List of skills" />
                        </Col>

                    </Row>


                    <Row className="internrow">
                        <Col sm={4}>

                            <Label for="upload">CV Upload :</Label>
                        </Col>
                        <Col sm={6}>
                            <CustomInput type="file" name="upload" />
                        </Col>
                    </Row>
                    <h5 style={{marginTop:"30px"}}><b>Fill the details about current internship:</b></h5>
                    <Row className="internrow">
                        <Col sm={4}>
                            <Label for="name">Name of the Company :</Label><br />
                        </Col>
                        <Col sm={6}>
                            <input className="form-control" placeholder="Enter company name..." />
                        </Col>
                    </Row>
                    <Row className="internrow">
                        <Col sm={4}>
                            <Label for="position">Position :</Label><br />
                        </Col>
                        <Col sm={6}>
                            <input className="form-control" placeholder="Enter the position you worked for..." />
                        </Col>
                    </Row>


                    <Row className="internrow">
                    <Col md={5}>
                        <FormGroup>
                            <Label for="date">Start Date</Label>
                            <Input type="date" name="date"  placeholder="date placeholder"/>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <Label for="date">End Date</Label>
                            <Input type="date" name="date"  placeholder="date placeholder"/>
                        </FormGroup>
                    </Col>
                </Row>
                    <div style={{ textAlign: 'center' }}>

                <FormGroup style={{display:'inline-block',alignSelf:'center'}}>
                           
                     <button style={{ color: "white", backgroundColor: 'blue', padding:"7px" }} className="btn">Upload Docs</button> &nbsp;&nbsp;&nbsp; 
        

                    <button style={{ color: "white", backgroundColor: '#138808' }} type="submit" className="btn">Submit</button>
                    
                </FormGroup>
                </div>
            </Form>
        </div>
        );
    }
}

export default Intern;


