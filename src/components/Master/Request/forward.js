import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Input } from 'reactstrap';

const Forward = (props) => {
  const {    
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
     <Button style= {{background: "rgb(119, 65, 65)"}} onClick={toggle}>Forward</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><b>Forward</b></ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>

              <Col sm={10}>
                <Input style={{width: "120%"}} type="select" name="select" id="exampleSelect">
                  <option>Department</option>
                  <option>Computer Science</option>
                  <option>Information Technology</option>
                  <option>Electrical</option>
                  <option>Mechaniclal</option>
                </Input>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle} style={{margin:"auto"}}>Send</Button>{' '}
          
        </ModalFooter>
      </Modal>

      
    </div>
  );
}

export default Forward;