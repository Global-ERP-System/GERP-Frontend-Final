import React, { Component } from "react";
import {Card,CardTitle,CardText,CardBody,CardHeader,CardFooter,Col, Row} from 'reactstrap';
import "./assignment.css";

class Assignment extends Component {
    render() {
        return (
            <div style={{marginLeft:'22%',marginRight:'22%'}}>
                <form style={{marginLeft:'10%',marginRight:'10%', marginBottom:'5%'}}>
                        <center><h2  style={{fontFamily:'Montserrat ', fontWeight:'700'}} className="text-center">ASSIGNMENTS</h2></center>
                                  <Row>
                                        <label style={{fontFamily:'Pt sans narrow ', fontWeight:'700'}}>Name :</label>
                                  </Row>
                                  <Row>
                                        <input style={{border: '2px solid black',fontFamily:'Pt sans narrow ', fontWeight:'700'}} class="form-control" placeholder="Enter Your Name" />
                                  </Row>
                                   <Row>
                                            <label style={{fontFamily:'Pt sans narrow ', fontWeight:'700'}}>Enrollment Number :</label>
                                    </Row>
                                    <Row>
                                           <input class="form-control" style={{border: '2px solid black',fontFamily:'Pt sans narrow ', fontWeight:'700'}} placeholder="Enter your Enrollment Number" />
                                    </Row>
                                    <Row>
                                            <label style={{fontFamily:'Pt sans narrow ', fontWeight:'700'}}>Subject Code :</label>
                                    </Row>
                                     <Row>
                                           <input type="number" style={{border: '2px solid black',fontFamily:'Pt sans narrow ', fontWeight:'700'}} class="form-control" placeholder="Enter the subject code" />
                                           </Row>
                                <Row>
                                            <label style={{fontFamily:'Pt sans narrow ', fontWeight:'700'}}>Branch :</label>
                                            </Row>
                                            <Row>
                                           <input type="number" style={{border: '2px solid black',fontFamily:'Pt sans narrow ', fontWeight:'700'}} class="form-control" placeholder="Enter your branch" />
                                        </Row>
                                <Row>
                                            <label style={{fontFamily:'Pt sans narrow ', fontWeight:'700'}}>Semester :</label>
                                            </Row>
                                            <Row>
                                           <input type="number" style={{border: '2px solid black',fontFamily:'Pt sans narrow ', fontWeight:'700'}} class="form-control" placeholder="Enter semester" />
                                        </Row>
                                <Row>
                                            <label style={{fontFamily:'Pt sans narrow ', fontWeight:'700'}}>Select file :</label>
                                            </Row>
                                            <Row>
                                                    <input style={{border: '2px solid black',fontFamily:'Pt sans narrow ', fontWeight:'700'}} id="choosefile" type="file" className="form-control" placeholder="Upload Assignment" />
                                                    </Row>
                                                    <div style={{textAlign:"center",fontFamily:'Pt sans narrow ', fontWeight:'700'}}>or</div>
                                                    <Row>
                                                    <input style={{border: '2px solid black',fontFamily:'Pt sans narrow ', fontWeight:'700'}} type="link" className="form-control" placeholder="Add Link"/>
                                                </Row>
                                                <br/>
                                <div style={{textAlign:"center"}}>
                                    <button type="submit" className="btn" style={{background:'#138808', color:'white'}}>Submit</button>
                                </div>
                </form>
                </div>
        );
    }
}

export default Assignment;    