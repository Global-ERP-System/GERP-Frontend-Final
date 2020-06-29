import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Assign = (props) => {
  const {    
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Assign Faculty</Button> 
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><b>Assign Faculty</b> </ModalHeader>
              <ModalBody>
                  <Form>
                      <FormGroup row>
                          <Label for="exampleFrom" sm={2}>Employee ID:</Label>
                          <Col sm={10}>
                              <Input type="text" name="Employee ID" id="examplefrom" />
                          </Col>
                      </FormGroup>

                      <FormGroup row>
                          <Label for="exampleTo" sm={2}>Employee Name:</Label>
                          <Col sm={10}>
                              <Input type="text" name="Employee Name" id="exampleto" />
                          </Col>
                      </FormGroup>

                      <FormGroup row>
                          <Label for="exampleSubject" sm={2}>Class:</Label>
                          <Col sm={10}>
                              <Input type="text" name="Class" id="examplesubject" />
                          </Col>
                      </FormGroup>

                      <FormGroup row>
                          <Label for="exampleSubject" sm={2}>Subject:</Label>
                          <Col sm={10}>
                              <Input type="text" name="Subject" id="examplesubject" />
                          </Col>
                      </FormGroup>

                      

                      <FormGroup row>
                          <Button color="primary" onClick={toggle} style={{margin:"auto"}}>Assign</Button>
                      </FormGroup>
                  </Form>
                  
        </ModalBody>
        
      </Modal>
      
     
    </div>
  );
}

export default Assign;