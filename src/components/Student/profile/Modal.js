import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,FormGroup,Row,Col,Label,CustomInput,Input,Card } from 'reactstrap';
// import "./Modal.css"
const Create = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
  <div>
    <Button color="primary" onClick={toggle} className="button1">Edit Details</Button>
    <Modal isOpen={modal} toggle={toggle} contentClassName="assignment-modal">
      <ModalHeader style={{backgroundColor:'#f5f5f5'}} toggle={toggle} close={closeBtn}>Assignment</ModalHeader>
      <ModalBody>
      <div className="container" style={{paddingTop:'0',paddingBottom:'0',marginTop:'20px'}}>
          
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
                          <option>Operating System</option>
                          <option>Embedded System</option>
                          <option>Cryptography</option>
                      </CustomInput>
                  </FormGroup>
                  </Col>
                  <Col md={4}>
                  <FormGroup>
                      <Label for="student">For</Label>
                      <CustomInput type="select" id="student">
                          <option>All</option>
                          <option>Select few </option>
                      </CustomInput>
                  </FormGroup>
                  </Col>
              </Row>
              <Row form>
                  <Col md={8}>
                  <FormGroup>
                  <Label for="topic">Topic</Label>
                  <Input type="text" id="topic" />
                  </FormGroup>
                  </Col>
                  <Col md={4}>
                  <FormGroup>
                  <Label for="marks">Marks</Label>
                  <Input type="text" id="marks" />
                  </FormGroup>
                  </Col>
              </Row>
              <Row form>
                  <Col md={12}>
                  <FormGroup>
                  <Label for="desc">Description</Label>
                  <Input type="textarea" id="desc" placeholder="Instructions(optional)" />
                  </FormGroup>
                  </Col>
              </Row>
              <Row form>
                  <Col md={6}>
                  <FormGroup>
                      <Label for="class">Due Date</Label>
                      <Input type="date" id="date" />
                  </FormGroup>
                  </Col>
                  <Col md={6}>
                  <FormGroup>
                      <Label for="class">Due Time</Label>
                      <Input type="time" id="time" />
                  </FormGroup>
                  </Col>
                  </Row>
              <Row form>
                  <Input type="file" id="file" />
              </Row>
          </Form>
          
      </div>
      </ModalBody>
      <ModalFooter>
        <Col>
        <Button type= "submit" color="primary" onClick={toggle}>Assign</Button>{' '}
        </Col>
        <Col>
        <Button style={{marginLeft:'80px'}} color="secondary" onClick={toggle}>Cancel</Button>
        </Col>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default Create;