import React, { Component } from "react";  
import Popup from "reactjs-popup";

import { Table,Container, Row, Col, Input, Label } from 'reactstrap';
import View from "./view";
import Forward from "./forward";
import Assign from "./assign";
import Respond from "./respond";
import './request.css'



class Request extends Component{
    render() {
        

        return (
            <div>
                <div id="header">
                    <h1 id='head'><b>REQUEST</b></h1>
                </div>

                <div id="mid">
                    <Container>
                        <Row className="content">
                            <Col xs="auto" style={{float: "left"}}>
                                <Label for="class">Choose Date</Label>                              
                            </Col>
                            <Col xs="auto">
                                <Input type="date" id="date" />
                            </Col>
                            <Col>
                                <select id="post" >
                                    <option>Staff</option>
                                    <option>Student</option>
                                </select>
                            </Col>
                        </Row>
                    </Container>                    
                </div>

                <div id="main" style={{padding: "2%"}}>
                    <Table id="content" striped bordered hover>
                        <thead>
                            <tr id="first">
                                <th>S. No.</th>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>Branch</th>
                                <th>Types of Request</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>10253</td>
                                <td>SFG</td>
                                <td>CSE</td>
                                <td>Leave Application</td>
                                <td>
                                    <Container>
                                        <Row>
                                            <Col xs="auto"><View /></Col>
                                            <Col xs="auto"><Forward /></Col>
                                            <Col xs="auto"><Assign /></Col>
                                            <Col xs="auto"><Respond /></Col>
                                        </Row>
                                    </Container>
                                </td>                               
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>10271</td>                              
                                <td>ABC</td>                                
                                <td>IT</td>
                                <td>Leave Application</td>
                                <td>
                                    <Container>
                                        <Row>
                                            <Col xs="auto"><View /></Col>
                                            <Col xs="auto"><Forward /></Col>
                                            <Col xs="auto"><Assign /></Col>
                                            <Col xs="auto"><Respond /></Col>
                                        </Row>
                                    </Container>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>10231</td>
                                <td>XXX</td>
                                <td>EEE</td>
                                <td>Leave Application</td>
                                <td>
                                    <Container>
                                        <Row>
                                            <Col xs="auto"><View /></Col>
                                            <Col xs="auto"><Forward /></Col>
                                            <Col xs="auto"><Assign /></Col>
                                            <Col xs="auto"><Respond /></Col>
                                        </Row>
                                    </Container>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>           
        );
    }
}

export default Request;