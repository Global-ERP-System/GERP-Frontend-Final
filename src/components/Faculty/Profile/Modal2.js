import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col } from 'reactstrap';
// import "./Modal.css"
const Create2 = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
  <div>
    <Button color="primary" onClick={toggle} className="button1" style={{width:'130px',height:'36px'}}>Edit Details</Button>
    <Modal isOpen={modal} toggle={toggle} contentClassName="profile-modal">
      <ModalHeader style={{backgroundColor:'#f5f5f5'}} toggle={toggle} close={closeBtn}>Experience</ModalHeader>
      <ModalBody>
      
            <div style={{width:'100%',float:'left'}}>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>Training</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter Training details"/>
                
                <br></br>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>Internship</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter Internship details"/>

            </div>

            <div style={{width:'100%',float:'left', marginTop: '20px'}}>

            <label style={{fontWeight:'bold',fontSize:'14px'}}>Other certification/course</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter details"/>
                
                <br></br>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>Honor/Award</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter award details"/>
            </div>


      </ModalBody>
      <ModalFooter>
        <Col>
        <Button type= "submit" color="primary" onClick={toggle}>Submit</Button>{' '}
        </Col>
        <Col>
        <Button style={{marginLeft:'80px'}} color="secondary" onClick={toggle}>Cancel</Button>
        </Col>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default Create2;