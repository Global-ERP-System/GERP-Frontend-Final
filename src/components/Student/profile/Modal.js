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
    <Button color="primary" onClick={toggle} className="button1" style={{width:'130px',height:'40px'}}>Edit Details</Button>
    <Modal isOpen={modal} toggle={toggle} contentClassName="assignment-modal"   style={{width:'600px'}}>
      <ModalHeader style={{backgroundColor:'#f5f5f5'}} toggle={toggle} close={closeBtn}>Profile</ModalHeader>
      <ModalBody>
      
            <div style={{height:'360px',width:'228px',float:'left'}}>

                <label>Registration No.</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter registration number"/>
                
                <br></br>

                <label>First Name</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter first name"/>

                <br></br>

                <label>Parent Name</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter parent name"/>

                <br></br>

                <label>Phone No.</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter phone number"/>

            </div>

            <div style={{height:'360px',width:'228px',float:'left',marginLeft:'10px'}}>

            <label>Roll No.</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter registration number"/>
                
                <br></br>

                <label>Last Name</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter first name"/>

                <br></br>

                <label>Email</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter parent name"/>

                <br></br>

                <label>Blood Group</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter phone number"/>

            </div>
            {/* <label style={{fontSize:'14px',fontWeight:'bold'}}>Registration No.</label>
            <br></br>
            <input className="form-control" style={{width:'50%',fontSize:'14px'}} placeholder="Enter registration number"/>

            <label style={{fontSize:'14px',fontWeight:'bold'}}>Roll No.</label>
            <br></br>
            <input className="form-control" style={{width:'50%',fontSize:'14px'}} placeholder="Enter roll number"/>         */}


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