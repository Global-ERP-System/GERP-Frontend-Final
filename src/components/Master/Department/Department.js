import React, { Component } from 'react'
import {Button,ButtonGroup,Card, CardTitle, CardText} from 'reactstrap';
import "./Department.css"


const Department = (props) => {
  return (
   <div>
        <div class="h1">
         <h1> Department</h1>
        </div>
        <div class="btn">
          <ButtonGroup size="lg">
      <Button  color="primary">Student</Button>
      <Button  color="secondary">Staff</Button>
      <Button color="success">Syllabus</Button>
      <Button  color="info">Achievements</Button>
      </ButtonGroup>
      </div>
  
      <Card body>
        <CardTitle>Vision</CardTitle>
        <CardText></CardText>
        
      </Card>
      <Card body>
        <CardTitle>Mission</CardTitle>
        <CardText></CardText>
        
      </Card>
      
      <div class="imgs">
          Department_Memorial_Images
      </div>
    
   </div>
   
  );
}

export default Department;