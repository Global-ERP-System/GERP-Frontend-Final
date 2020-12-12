import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Col,Label,Input,Table } from 'reactstrap';
import "./Modal.css"
const Mark = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
  <div>
    <Button style={{width:'auto'}} color="primary" onClick={toggle} >Reg Lectures</Button>
    <Modal isOpen={modal} toggle={toggle} contentClassName="attendence-modal">
      <ModalHeader toggle={toggle} close={closeBtn}>Attendence
          
                 </ModalHeader>
      <ModalBody>
      <div className="container" style={{overflow: 'auto'}}>
          <Col md={6}>
                  <FormGroup>
                      <Label for="class">Choose Date</Label>
                      <Input type="date" id="date" />
                  </FormGroup>
                  </Col>
                  
          
            <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Student ID</th>
          <th>Present</th>
          <th>Absent</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>17Rh1a05b0</td>
          <td>
                     <FormGroup check>
                          <Input type="checkbox" name="check" id="exampleCheck"/>
        
                          </FormGroup>
          </td>
          <td>
               <FormGroup check>
                          <Input type="checkbox" name="check" id="exampleCheck"/>
        
                          </FormGroup>
          

          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>
                       <FormGroup check>
                          <Input type="checkbox" name="check" id="exampleCheck"/>
        
                          </FormGroup>
        </td>
          <td>
                  <FormGroup check>
                          <Input type="checkbox" name="check" id="exampleCheck"/>
        
                          </FormGroup>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>
               <FormGroup check>
                          <Input type="checkbox" name="check" id="exampleCheck"/>
        
                          </FormGroup>
          </td>
          <td>
                  <FormGroup check>
                          <Input type="checkbox" name="check" id="exampleCheck"/>
        
                          </FormGroup>
           </td>
        </tr>
       
      </tbody>
    </Table>
          
      </div>
      </ModalBody>
      <ModalFooter>
        <Button type= "submit" color="primary" onClick={toggle}>Add</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default Mark;