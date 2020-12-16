import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Col } from 'reactstrap';
// import "./Modal.css"
const Create = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
  <div>
    <Button color="primary" onClick={toggle} className="button1" style={{width:'130px',height:'36px'}}>Edit Details</Button>
    <Modal isOpen={modal} toggle={toggle} contentClassName="profile-modal">
      <ModalHeader style={{backgroundColor:'#f5f5f5'}} toggle={toggle} close={closeBtn}>Profile</ModalHeader>
      <ModalBody>
      
            <div style={{width:'100%',float:'left'}}>

                {/* <label style={{fontWeight:'bold',fontSize:'14px'}}>Registration No.</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter registration number"/> */}
                
                <br></br>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>First Name</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter first name"/>

                <br></br>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>Parent Name</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter parent name"/>

                <br></br>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>Phone No.</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter phone number"/>

            </div>

            <div style={{width:'100%',float:'left'}}>

            {/* <label style={{fontWeight:'bold',fontSize:'14px'}}>Roll No.</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter roll number"/> */}
                
                <br></br>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>Last Name</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter last name"/>

                <br></br>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>Email</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter email"/>

                <br></br>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>Blood Group</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter blood group"/>

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

export default Create;