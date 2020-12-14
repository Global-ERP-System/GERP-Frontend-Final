import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, } from 'reactstrap';
// import "./Modal.css"
const Create1 = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
  <div>
    <a href className="a_link" onClick={toggle}>
    <img alt='' src="https://image.flaticon.com/icons/png/512/61/61456.png" style={{height:'9%',width:'9%'}}></img>
    </a>
    {/* <Button color="primary" onClick={toggle} className="button1" style={{width:'130px',height:'36px'}}>Edit Details</Button> */}
    <Modal isOpen={modal} toggle={toggle} contentClassName="profile-modal"   style={{width:'600px'}}>
      <ModalHeader style={{backgroundColor:'#f5f5f5'}} toggle={toggle} close={closeBtn}>Qualification</ModalHeader>
      <ModalBody>
      
            <div style={{height:'200px',width:'228px',float:'left'}}>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>Senior Secondary School</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter senior sec school"/>
                
                <br></br>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>Secondary School</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter secondary school"/>

            </div>

            <div style={{height:'200px',width:'228px',float:'left',marginLeft:'10px'}}>

            <label style={{fontWeight:'bold',fontSize:'14px'}}>Any other/Ug</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter degree"/>
                
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

export default Create1;