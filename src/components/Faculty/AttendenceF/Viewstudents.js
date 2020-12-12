import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,Table } from 'reactstrap';
import "./Modal.css"
const View = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
  <div>
    <Button style={{width:'auto'}} color="warning" onClick={toggle} >View Students</Button>
    <Modal isOpen={modal} toggle={toggle} contentClassName="attendence-modal">
      <ModalHeader toggle={toggle} close={closeBtn}>View Attendence
          
                 </ModalHeader>
      <ModalBody>
      <div className="container" style={{overflow: 'auto'}}>
           
            <Table hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Student ID</th>
          <th>lectures present</th>
          <th>Total lectures</th>
          <th>Attendence %</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>17Rh1a05b0</td>
          <td>21</td>
          <td>24</td>
          <td>85%</td>
        </tr>
         <tr>
          <th scope="row">2</th>
          <td>17Rh1a05b0</td>
          <td>21</td>
          <td>24</td>
          <td>85%</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>17Rh1a05b0</td>
          <td>21</td>
          <td>24</td>
          <td>85%</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>17Rh1a05b0</td>
          <td>21</td>
          <td>24</td>
          <td>85%</td>
        </tr>
        
      </tbody>
    </Table>
          
      </div>
      </ModalBody>
      
    </Modal>
  </div>
);
}

export default View;