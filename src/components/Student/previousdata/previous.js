import React, { Component } from "react";
import {Card,CardTitle,CardText,CardBody,CardHeader,CardFooter,Form,FormGroup,CustomInput,Label,Row,Col,Input,Button} from 'reactstrap';
import './previous.css'
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";

class Previous extends Component {
    render() {
        return (
            <body style={{ paddingBottom: '15px' }}>



                <div>
                   
                    <Form className="previous" >
                        <center>
                            <h1>Previous Data</h1>
                            </center>

                           
                       
                        <hr style={{ width: '80%' }}></hr>
                    <Row>
                        <h5>Graduation :</h5>
                        <div style={{ width: "100%" }}>
                            <input className="form-control" id="graduation" placeholder="Graduation..." />
                        </div>
                    </Row>
                    <br></br>
                    <Row>
                        <h5>Senior Secondary school :</h5>
                        <div style={{ width: "100%" }}>
                            <input className="form-control" id="ssc" placeholder="Senior secondary school..." />
                        </div>
                    </Row>
                    <br></br>
                    <Row>
                        <Col sm={4}>
                            <select className="form-control" id="stream" name="stream" placeholder="select stream">
                                <option value="science">Select Stream</option>
                                <option value="science">Science</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Arts">Arts</option>

                            </select>
                        </Col>
                        <Col sm={4} >
                            <select className="form-control" id="board" name="board">
                                <option value="csbe">Select Board</option>
                                <option value="csbe">CBSE</option>
                                <option value="icse">ICSE</option>
                                <option value="sb">State Board</option>
                                <option value="other">Other</option>
                            </select>
                        </Col>

                        <Col sm={1} id="cgpa">
                            CGPA
                    </Col>
                        <Col sm={3}>
                            <input className="form-control" name="address" id="ssc" placeholder="Enter GPA" />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>

                        <h5>Secondary school :</h5>
                        <div style={{ width: '100%' }}>
                            <input className="form-control" id="sc" placeholder="Secondary school..." />
                        </div>
                    </Row>
                    <br></br>
                    <Row>

                        <Col sm={4}>
                            <select className="form-control" id="board" name="board">
                                <option value="csbe">Select Board</option>
                                <option value="csbe">CBSE</option>
                                <option value="icse">ICSE</option>
                                <option value="sb">State Board</option>
                                <option value="other">Other</option>
                            </select>
                        </Col>


                        <Col sm={1} id="cgpa">
                            CGPA
                    </Col>
                        <Col sm={3}>
                            <input className="form-control" name="address" id="ssc" placeholder="Enter GPA" />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <h5>Diploma Course :</h5>
                        <div style={{ width: '100%' }}>
                            <input className="form-control" id="sc" placeholder="Diploma" />
                        </div>
                    </Row>
                    <br></br>
                    <div style={{ textAlign: "center" }}>
                        <button style={{ color: "white", backgroundColor: 'blue' }} type="submit" className="btn">Submit</button>
                            <br></br>
                        </div>
                        
                        
                </Form>
                </div>
                </body>
        );
    }
}

export default Previous;


