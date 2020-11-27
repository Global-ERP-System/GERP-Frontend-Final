import React, { Component } from "react";
import {Card,CardTitle,CardText,CardBody,CardHeader,CardFooter,Form,FormGroup,CustomInput,Label,Row,Col,Input,Button} from 'reactstrap';
import './previous.css'
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";

class Previous extends Component {
    render() {
        return (            
            <Form className="previous" >
                <center>  <h1 style={{ fontFamily: 'Montserrat', fontWeight:'700' }}>Previous Data</h1>    </center>
                <hr style={{ width:'80%' }}></hr>
                    <Row>
                    <Col sm={5}>
                        <p style={{ fontFamily: 'Pt sans narrow', fontWeight: 'bold' }}>Graduation:</p>
                        </Col>
                        <Col sm={7}>
                        <input className="form-control" id="graduation" placeholder="Graduation..." style={{ fontFamily: 'Montserrat', fontWeight: '400' }} />
                        </Col>
                       
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={5}>
                        <p style={{ fontFamily: 'Pt sans narrow ', fontWeight: 'bold' }}> Senior Secondary school :</p>
                        </Col>
                        <Col sm={7}>
                        <input className="form-control" id="ssc" placeholder="Senior secondary school..." style={{ fontFamily: 'Montserrat', fontWeight: '400' }} />
                        </Col>
                    </Row>
                    <br></br>
                    <Row style={{marginTop:'5px'}}>
                        <Col sm={4}>
                        <select className="form-control" id="stream" name="stream" placeholder="select stream" style={{ fontFamily: 'Montserrat', fontWeight: '400' }}>
                                <option value="science">Select Stream</option>
                                <option value="science">Science</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Arts">Arts</option>

                            </select>
                        </Col>
                        <Col sm={4} >
                        <select className="form-control" id="board" name="board" style={{ fontFamily: 'Montserrat', fontWeight: '400' }}>
                                <option value="csbe">Select Board</option>
                                <option value="csbe">CBSE</option>
                                <option value="icse">ICSE</option>
                                <option value="sb">State Board</option>
                                <option value="other">Other</option>
                            </select>
                        </Col>

                        <Col sm={1} id="cgpa">
                        <p style={{ fontFamily: 'Pt sans narrow', fontWeight: 'bold' }}> CGPA</p>
                        </Col>
                        <Col sm={3}>
                        <input className="form-control" name="address" id="ssc" placeholder="Enter GPA" style={{ fontFamily: 'Montserrat', fontWeight: '400' }}/>
                        </Col>                            
                    </Row>
                    <br></br>

                    <Row>
                        <Col sm={5}>
                        <p style={{ fontFamily: 'Pt sans narrow', fontWeight: 'bold' }}>Secondary school :</p>
                        </Col>
                        <Col sm={7}>
                        <input className="form-control" id="sc" placeholder="Secondary school..." style={{ fontFamily: 'Montserrat', fontWeight: '400' }} />
                        </Col>

                    </Row>
                    <br></br>

                    <Row style={{ marginTop: '5px' }}>

                        <Col sm={4}>
                        <select className="form-control" id="board" name="board" style={{ fontFamily: 'Montserrat', fontWeight: '400' }}>
                                <option value="csbe">Select Board</option>
                                <option value="csbe">CBSE</option>
                                <option value="icse">ICSE</option>
                                <option value="sb">State Board</option>
                                <option value="other">Other</option>
                            </select>
                        </Col>


                        <Col sm={1} id="cgpa" style={{ marginLeft:'200px' }}>
                        <p style={{ fontFamily: 'Pt sans narrow', fontWeight: 'bold' }}>CGPA</p>
                        </Col>
                        <Col sm={3}>
                        <input className="form-control" name="address" id="ssc" placeholder="Enter GPA" style={{ fontFamily: 'Montserrat', fontWeight: '400' }}/>
                        </Col>
                            
                    </Row>
                    <br></br>

                    <Row>
                        <Col sm={5}>
                        <p style={{ fontFamily: 'Pt sans narrow', fontWeight: 'bold' }}>Diploma Course :</p>
                        </Col>
                        <Col sm={7}>
                        <input className="form-control" id="sc" placeholder="Diploma" style={{ fontFamily: 'Montserrat', fontWeight: '400' }}/>
                        </Col>

                    </Row>
                    <br></br>
                    <br></br>
                    <div style={{ textAlign: "center" }}>
                    <button style={{ color: "white", backgroundColor: '#138808' }} type="submit" className="btn">Submit</button>
                            <br></br>
                    </div>
                 </Form>
            
        );
    }
}

export default Previous;


