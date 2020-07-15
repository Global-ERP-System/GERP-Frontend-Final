import React, { Component } from "react";
import {Card,CardTitle,CardText,CardBody,CardHeader,CardFooter,Col, Row} from 'reactstrap';
import "./assignment.css";

class Assignment extends Component {
    render() {
        return (
            <div style={{marginLeft:'22%',marginRight:'22%'}}>
                <form style={{marginLeft:'10%',marginRight:'10%', marginBottom:'5%'}}>
                        <center><h2 className="text-center">ASSIGNMENTS</h2></center>
                                  <Row>
                                        <label>Name :</label>
                                  </Row>
                                  <Row>
                                        <input style={{border: '2px solid black'}} class="form-control" placeholder="Enter Your Name" />
                                  </Row>
                                   <Row>
                                            <label>Enrollment Number :</label>
                                    </Row>
                                    <Row>
                                           <input class="form-control" style={{border: '2px solid black'}} placeholder="Enter your Enrollment Number" />
                                    </Row>
                                    <Row>
                                            <label>Subject Code :</label>
                                    </Row>
                                     <Row>
                                           <input type="number" style={{border: '2px solid black'}} class="form-control" placeholder="Enter the subject code" />
                                           </Row>
                                <Row>
                                            <label>Branch :</label>
                                            </Row>
                                            <Row>
                                           <input type="number" style={{border: '2px solid black'}} class="form-control" placeholder="Enter your branch" />
                                        </Row>
                                <Row>
                                            <label>Semester :</label>
                                            </Row>
                                            <Row>
                                           <input type="number" style={{border: '2px solid black'}} class="form-control" placeholder="Enter semester" />
                                        </Row>
                                <Row>
                                            <label>Select file :</label>
                                            </Row>
                                            <Row>
                                                    <input style={{border: '2px solid black', background:'red'}} type="file" className="form-control" placeholder="Upload Assignment" />
                                                    </Row>
                                                    <div style={{textAlign:"center"}}>or</div>
                                                    <Row>
                                                    <input style={{border: '2px solid black'}} type="link" className="form-control" placeholder="Add Link"/>
                                                </Row>
                                                <br/>
                                <div style={{textAlign:"center"}}>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                </form>
                </div>
        );
    }
}

export default Assignment;    