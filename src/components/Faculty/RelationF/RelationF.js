import React, { Component } from 'react'
import { Container, Row, Col ,FormGroup, Label, Input,Button,Card, CardTitle, CardText, ButtonToggle } from 'reactstrap';
import "./RelationF.css"


const Relation = (props) => {
  return (
   <div>
  
    <div class="container">
     
        <Container fluid>
 <p></p>
              <Row xs="2">
        <Col>
              <FormGroup row>
        <Label for="Firstname" sm={2}>FirstName</Label>
        <Col sm={10}>
          <Input type="text"  id="Firstname" placeholder="" />
        </Col>
      </FormGroup>
                
          </Col>
        <Col>
               <FormGroup row>
        <Label for="Lastname" sm={2}>LastName</Label>
        <Col sm={10}>
          <Input type="text"  id="Lastname" placeholder="" />
        </Col>
      </FormGroup>
           </Col>
        <Col>
           <FormGroup row>
        <Label for="College" sm={2}>College</Label>
        <Col sm={10}>
          <Input type="text"  id="College" placeholder="" />
        </Col>
      </FormGroup>
          
         </Col>
        <Col>
         <FormGroup row>
        <Label for="Department" sm={2}>Department</Label>
        <Col sm={10}>
          <Input type="text"  id="Department" placeholder="" />
        </Col>
      </FormGroup>
        </Col>
      </Row> 
       <div class="button">
          <Button type= "submit" color="primary">Search</Button>{' '}
            </div>
      
      </Container> 
          
         </div>

           <div class="h1">
          <h1>Your Relations</h1>
         </div>
          <div >
        <Card body>
                <Row xs="5">
        <Col>First/Last Name</Col>
        <Col>School/College</Col>
        <Col>Department</Col>
        <Col> <ButtonToggle color="success">Connect</ButtonToggle>{' '}</Col>
        <Col> <ButtonToggle color="primary">Message</ButtonToggle>{' '}</Col>
      </Row>
      </Card>
       <br></br>
        <Card body>
                <Row xs="5">
        <Col>First/Last Name</Col>
        <Col>School/College</Col>
        <Col>Department</Col>
        <Col> <ButtonToggle color="success">Connect</ButtonToggle>{' '}</Col>
        <Col> <ButtonToggle color="primary">Message</ButtonToggle>{' '}</Col>
      </Row>
      </Card> 
      <br></br>
       <Card body>
                <Row xs="5">
        <Col>First/Last Name</Col>
        <Col>School/College</Col>
        <Col>Department</Col>
        <Col> <ButtonToggle color="success">Connect</ButtonToggle>{' '}</Col>
        <Col> <ButtonToggle color="primary">Message</ButtonToggle>{' '}</Col>
      </Row>
      </Card>
      
    </div>
          </div>
   
  );
}

export default Relation;