import React, { Component } from 'react'
import {Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import "./Schedule.css"


const Schedule = (props) => {
  return (
   <div>
        <Form>
        <div class="h1">
         <p> Schedule</p>
        </div>
        <div class="input">
            <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="Conference"></Label>
            <Input type="text"  id="Confernce"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="events"></Label>
            <Input type="text"  id="events"/>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="meeting"></Label>
            <Input type="text" id="meeting"/>
          </FormGroup>  
        </Col>
      </Row>
        </div>
        <Row form>
        <div class="h3">
            <h3><u>with people</u></h3>
         </div>
         <div class="row">
              <FormGroup row>
        <Label for="exampleSelect" sm={4}></Label>
        <Col sm={12}>
          <Input type="select" name="select" id="exampleSelect">
            <option>faculty</option>
            <option>student</option>
            <option>staff</option>
            
          </Input>
        </Col>
      </FormGroup>
       
              <FormGroup row>
        <Label for="exampleSelect" sm={8}></Label>
        <Col sm={12}>
          <Input type="select" name="select" id="exampleSelect">
            <option>Department</option>
            <option></option>
            <option></option>
            
          </Input>
        </Col>
      </FormGroup>
       </div>
     </Row>
        <div class="msg">
            <FormGroup>
        <Label for="exampleText">Title/Description</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
        </div>
       <div class="btn">
      <Button color="primary" size="lg">Schedule</Button>
      </div>
    </Form>
         
     
   </div>
   
  );
}

export default Schedule;