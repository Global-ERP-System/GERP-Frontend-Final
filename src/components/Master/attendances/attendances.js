import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import {Card,CardTitle,CardText,CardBody,CardHeader,CardFooter,Form,FormGroup,CustomInput,Label,Row,Col,Input,Button} from 'reactstrap';
import './attendances.css'

class Attend extends Component {
    state = {
        dataPie: {
          labels: ["Absent", "present"],
          datasets: [
            {
              data: [30, 70],
              backgroundColor: [
                "#F7464A",
                "#46BFBD"
              ],
              hoverBackgroundColor: [
                "#FF5A5E",
                "#5AD3D1"
              ]
            }
          ]
        }
      }
    render() {
        return (
            <div>
            <div className="heading">
                <h1>ATTENDANCE</h1>
            </div>
            <Form className="attendance">
            <Row>
                    <Col sm={1}>
                          Name
                    </Col>
                    <Col sm={3}>
                    <Input type="text" name="" id="name" placeholder=""/>
                    </Col>
                    <Col sm={1}>
                          Date
                    </Col>
                    <Col sm={3}>
                    <Input type="date" name="" id="date" placeholder=""/>
                    </Col>
                    <Col sm={3}>
                        <select id="student" name="student">
                            <option value="science">Student</option>
                            <option value="Commerce">Faculty</option>
                        </select>
                    </Col>
                </Row>
               <br></br>
              <Row>
                   <Col sm={4}>
                        <select id="Department" name="Department">
                           <option value="cse">Computer Science Engineering </option>
                           <option value="ece">ECE</option>
                           <option value="eee">EEE</option>
                           <option value="ice">ICE</option>
                      </select>
                  </Col>
                    <Col sm={2}>
                          Enrollment no. 
                    </Col>
                    <Col sm={3}>
                    <Input type="number" name="eno." id="eno" placeholder=""/>
                    </Col>
              </Row>
               <br></br>
               <MDBContainer>
              
               <Pie data={this.state.dataPie} options={{ responsive: true }} />
              </MDBContainer>
               
            </Form>
        </div>
        );
    }
}

export default Attend;
