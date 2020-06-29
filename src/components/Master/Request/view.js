import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const View = (props) => {
  const {    
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>View</Button> {' '}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><b>View</b> </ModalHeader>
              <ModalBody>
                  <Form>
                      <FormGroup row>
                          <Label for="exampleFrom" sm={2}>From:</Label>
                          <Col sm={10}>
                              <Input type="text" name="To" id="examplefrom" />
                          </Col>
                      </FormGroup>

                      <FormGroup row>
                          <Label for="exampleTo" sm={2}>To:</Label>
                          <Col sm={10}>
                              <Input type="text" name="To" id="exampleto" />
                          </Col>
                      </FormGroup>

                      <FormGroup row>
                          <Label for="exampleSubject" sm={2}>Subject:</Label>
                          <Col sm={10}>
                              <Input type="text" name="Subject" id="examplesubject" />
                          </Col>
                      </FormGroup>

                      <FormGroup row>              
                          <Col sm={10}>
                              <Input type="textarea" name="text" id="exampleText" placeholder="Enter message" style={{width: "122%"}} />
                          </Col>                             
                          
                      </FormGroup>

                      <FormGroup row>
                          <Button color="primary" onClick={toggle} style={{margin:"auto"}}>Send</Button>
                      </FormGroup>
                  </Form>
                  
        </ModalBody>
        
      </Modal>
      
     
    </div>
  );
}

export default View;