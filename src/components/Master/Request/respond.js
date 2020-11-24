import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Respond = (props) => {
    const {    
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
       <Button color="success" onClick={toggle}>Respond</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}><b>Reply</b></ModalHeader>
          <ModalBody>
            <Form>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input type="textarea" name="text" id="exampleText" placeholder="Enter message" style={{ width: "122%" }} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Button color="primary" onClick={toggle} style={{margin:"auto"}}>Submit</Button>
                      </FormGroup>
            </Form>
          </ModalBody>
          
        </Modal>
  
        
      </div>
    );
  }
  
  export default Respond;