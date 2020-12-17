import React, { Component } from "react";
import { Row } from 'reactstrap';
import Table from 'react-bootstrap/Table';
import "./assignment.css";
import '../../Alert-Modal/submit-modal'
import MainModal from "../../Alert-Modal/submit-modal";

class Assignment extends Component {
    render() {
        return (
            <div className='parent-container'>
                <div className='container-md' style={{marginTop: '30px'}}>
                <h2 style={{fontFamily:'Montserrat ', fontWeight:'700'}} className="text-center">Due Assignment</h2>
                    <Table bordered hover>
                        <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Last Date</th>
                            <th>Turned In</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DBMS</td>
                                <td>12 December 2020</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>C++</td>
                                <td>12 March 2020</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Python</td>
                                <td>5 October 2020</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>OS</td>
                                <td>12 Januaray 2021</td>
                                <td>No</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='container-md'>
                    <form id="form_assg" style={{marginLeft:'20px',marginRight:'20px', marginBottom:'5%'}}>
                        <center>
                            <h2 style={{fontFamily:'Montserrat ', fontWeight:'700'}} className="text-center">Submit Assignment</h2>
                        </center>
                        <Row>
                            <label style={{fontFamily:'Pt sans narrow ', fontWeight:'700'}}>Name :</label>
                        </Row>
                        <Row>
                            <input style={{ border: '2px solid black', fontFamily:'Montserrat ', fontWeight:'400'}} class="form-control" placeholder="Enter Your Name" />
                        </Row>
                        <Row>
                            <label style={{fontFamily:'Pt sans narrow ', fontWeight:'700'}}>Enrollment Number :</label>
                        </Row>
                        <Row>
                            <input class="form-control" style={{ border: '2px solid black', fontFamily: 'Montserrat ', fontWeight:'400'}} placeholder="Enter your Enrollment Number" />
                        </Row>
                        <Row>
                            <label style={{fontFamily:'Pt sans narrow ', fontWeight:'700'}}>Subject Code :</label>
                        </Row>
                        <Row>
                            <input type="number" style={{ border: '2px solid black', fontFamily: 'Montserrat ', fontWeight:'400'}} class="form-control" placeholder="Enter the subject code" />
                        </Row>
                        <Row>
                            <label style={{fontFamily:'Pt sans narrow ', fontWeight:'700'}}>Branch :</label>
                        </Row>
                        <Row>
                            <input type="number" style={{ border: '2px solid black', fontFamily: 'Montserrat ', fontWeight:'400'}} class="form-control" placeholder="Enter your branch" />
                        </Row>
                        <Row>
                            <label style={{fontFamily:'Pt sans narrow ', fontWeight:'700'}}>Semester :</label>
                        </Row>
                        <Row>
                            <input type="number" style={{ border: '2px solid black', fontFamily: 'Montserrat ', fontWeight:'400'}} class="form-control" placeholder="Enter semester" />
                        </Row>
                        <Row>
                            <label style={{fontFamily:'Pt sans narrow ', fontWeight:'700'}}>Select file :</label>
                        </Row>
                        <Row>
                            <input style={{ border: '2px solid black', fontFamily:'Montserrat ', fontWeight:'400'}} id="choosefile" type="file" className="form-control" placeholder="Upload Assignment" />
                        </Row>
                        <div style={{textAlign:"center",fontFamily:'Pt sans narrow ', fontWeight:'700'}}>
                            or
                        </div>
                        <Row>
                            <input style={{ border: '2px solid black', fontFamily:'Montserrat ', fontWeight:'400'}} type="link" className="form-control" placeholder="Add Link"/>
                        </Row>
                        <div style={{textAlign:"center"}}>
                            <MainModal />
                        </div>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default Assignment;    