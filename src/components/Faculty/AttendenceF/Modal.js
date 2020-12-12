import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,FormGroup,Row,Col,Label,CustomInput,Input,Card } from 'reactstrap';
import "./Modal.css"
const Create = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
  <div style={{padding: '0 50px'}}>
    <Button style={{width: '80%'}} color='info' onClick={toggle} >Update Attendence</Button>
    <Modal isOpen={modal} toggle={toggle} contentClassName="attendence-modal">
      <ModalHeader toggle={toggle} close={closeBtn}>Attendence</ModalHeader>
      <ModalBody>
      <div className="container">
          
          <Form className="form1"> 
              <Row form>
                  <Col md={4}>
                  <FormGroup>
                      <Label for="class">Class</Label>
                      <CustomInput type="select" id="class">
                          <option>Class</option>
                          <option>CS8B</option>
                          <option>EC8A</option>
                          <option>CS6A</option>
                          <option>CS8A</option>
                      </CustomInput>
                  </FormGroup>
                  </Col>
                  <Col md={4}>
                  <FormGroup>
                      <Label for="class">Subject</Label>
                      <CustomInput type="select" id="class">
                          <option>Subject</option>
                          <option>Data Mining</option>
                          <option>Compiler Design</option>
                          <option>Web Technologies</option>
                          <option>Cryptography</option>
                      </CustomInput>
                  </FormGroup>
                  </Col>
                  <Col md={6}>
                  <FormGroup>
                      <Label for="class">Choose Date</Label>
                      <Input type="date" id="date" />
                  </FormGroup>
                  </Col>
                  
                  
              </Row>
              <Row form>
                  <Col md={8}>
                  <FormGroup>
                  <Label for="student">Student ID</Label>
                  <Input type="text" id="student" />
                  </FormGroup>
                  </Col>
     
             </Row>
              <FormGroup tag="fieldset" row>
        <legend className="col-form-label ">Mark Attendence</legend>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />
              Present
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />
              Absent
            </Label>
          </FormGroup>
          
        </Col>
      </FormGroup>
      
          </Form>
          
      </div>
      </ModalBody>
      <ModalFooter>
        <Button type= "submit" color="primary" onClick={toggle}>Update</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default Create;