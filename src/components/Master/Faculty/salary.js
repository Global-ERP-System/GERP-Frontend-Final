import React, { Component } from "react";  


import { Table,Container, Row, Col, Input, Label } from 'reactstrap';
import './salary.css'

class Salary extends Component{
    render() {
        return (
            <div>
                <div id="header">
                    <h1 id="main-head"><u><b>FACULTY</b></u></h1>
                    <h2 id='head'><b>SALARY</b></h2>
                </div>

                <div id="mid">
                    <Container>
                        <Row>
                            <Col xs="6" sm="4">Year/Session</Col>
                            <Col xs="6" sm="4">-</Col>
                            <Col sm="4">Rs__</Col>
                        </Row> <br/>
                        <Row>
                            <Col xs="6" sm="4">Year/Session</Col>
                            <Col xs="6" sm="4">-</Col>
                            <Col sm="4">Rs__</Col>
                        </Row> <br />
                        <Row>
                            <Col xs="6" sm="4">Current Year</Col>
                            <Col xs="6" sm="4">-</Col>
                            <Col sm="4">Rs__</Col>
                        </Row>
                    </Container>
                </div>
            </div>

        );
    }
}

export default Salary;