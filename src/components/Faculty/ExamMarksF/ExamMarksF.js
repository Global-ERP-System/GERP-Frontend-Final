import React, { Component,useState} from 'react';
import {Table,Button,Card,CardHeader,CardBody,CardTitle,Dropdown,DropdownToggle,DropdownMenu,DropdownItem,FormGroup, Label, Input,CustomInput,Col,Row,ButtonToggle} from 'reactstrap';
import "./ExamMarksF.css";

class Marks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delete: false
        }
    }
   toggle() {
        this.ListeningStateChangedEvent({
            delete: !this.state.delete
        })
    }
    render() {
       

        return (
         
           < div className = "body" >
            <Card>
            <CardHeader className = "cardheader1">
            <CardTitle> <h2 className = "h2"> <b> Student Exam Marks </b></h2> </CardTitle></CardHeader>
            <CardBody>
            <CardTitle>
            <div class = "row" >
               <div class="col">
                       <Col md={4}>
                  <FormGroup>
                      <Label for="class"><h5>Class</h5></Label>
                      <CustomInput type="select" id="class">
                          <option>class</option>
                          <option>CSE-5A</option>
                          <option>CSE-5B</option>
                          <option>CSE-5C</option>
                          <option>CSE-5D</option>
                      </CustomInput>
                  </FormGroup>
                  </Col>
            </div> 
              <div class="class">
                       <Col md={12}>
                  <FormGroup>
                      <Label for="class"><h5>Subject</h5></Label>
                      <CustomInput type="select" id="class">
                          <option>Subject</option>
                          <option>Data Mining</option>
                          <option>Compiler Design</option>
                          <option>Web Technologies</option>
                          <option>Cryptography</option>
                      </CustomInput>
                  </FormGroup>
                  </Col>
            </div> 
            </div>  
           </CardTitle>
            <Table className = "table1" >
            <thead className = "thead" >
            <tr id="first">
            <th >Roll No </th> 
           <th > </th>
            <th > Mid-Terms </th> 
            <th > Continuous Evaluation </th> 
            <th > Finals</th>
            
            </tr> 
            </thead > 
            <tbody >
            <tr >
            <th scope = "row"> 17bce102 </th>
            <th > </th> 
            <td >
                  <Col md={8}>
                  <FormGroup>
                  <Label for="mid"></Label>
                  <Input type="text" id="mid" />
                  </FormGroup>
                  </Col>
                      
             </td>
            <td > 
                    <Col md={8}>
                  <FormGroup>
                  <Label for="mid"></Label>
                  <Input type="text" id="mid" />
                  </FormGroup>
                  </Col>

           </td>  
            <td > 
                    <Col md={8}>
                  <FormGroup>
                  <Label for="mid"></Label>
                  <Input type="text" id="mid" />
                  </FormGroup>
                  </Col>

           </td>  
            
            </tr>
           <tr>
            <th scope = "row"> 17bce102 </th>
            <th > </th> 
            <td >
                  <Col md={8}>
                  <FormGroup>
                  <Label for="mid"></Label>
                  <Input type="text" id="mid" />
                  </FormGroup>
                  </Col>
                      
             </td>
            <td > 
                    <Col md={8}>
                  <FormGroup>
                  <Label for="mid"></Label>
                  <Input type="text" id="mid" />
                  </FormGroup>
                  </Col>

           </td>  
            <td > 
                    <Col md={8}>
                  <FormGroup>
                  <Label for="mid"></Label>
                  <Input type="text" id="mid" />
                  </FormGroup>
                  </Col>

           </td>  
            
            </tr>
           <tr>
            <th scope = "row"> 17bce102 </th>
            <th> </th> 
            <td>
                  <Col md={8}>
                  <FormGroup>
                  <Label for="mid"></Label>
                  <Input type="text" id="mid" />
                  </FormGroup>
                  </Col>
                      
             </td>
            <td > 
                    <Col md={8}>
                  <FormGroup>
                  <Label for="mid"></Label>
                  <Input type="text" id="mid"/>
                  </FormGroup>
                  </Col>

           </td>  
            <td> 
                    <Col md={8}>
                  <FormGroup>
                  <Label for="mid"></Label>
                  <Input type="text" id="mid"/>
                  </FormGroup>
                  </Col>

           </td>  
            
            </tr>
            
            
            </tbody> 
            </Table> 
            </CardBody>
                 
            </Card> 
                <div class="button">
          <Button type= "submit" color="primary">Save Marks</Button>{' '}
            </div>
            </div>
        


        );
    }
}

export default Marks;