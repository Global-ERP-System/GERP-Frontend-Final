import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,FormGroup,Row,Col,Label,CustomInput,Input,Card } from 'reactstrap';
// import "./Modal.css"
const Create1 = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <a className="close" onClick={toggle}>&times;</a>;

  return (
  <div>
    {/* <Button color="primary" onClick={toggle} className="button1" style={{width:'130px',height:'36px'}}>Edit Details</Button> */}
    <a href="#" className="a_link" onClick={toggle}>
    <img src="https://image.flaticon.com/icons/png/512/61/61456.png" style={{height:'6%',width:'6%',marginLeft:'89%',marginTop:'-8%'}}></img>
    </a>
    <Modal isOpen={modal} toggle={toggle} contentClassName="profile-modal"   style={{width:'600px'}}>
      <ModalHeader style={{backgroundColor:'#f5f5f5'}} toggle={toggle} close={closeBtn}> Edit Details</ModalHeader>
      <ModalBody>
      
            <div style={{height:'440px',width:'228px',float:'left'}}>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>First Name</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter first name"/>

                <br></br>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>Phone No.</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter phone number"/>

                <br></br>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>Organisation</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter organisation"/>

                <br></br>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>Duration</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter duration"/>

                <br></br>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>LinkedIn URL</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter your linkedin URL"/>

            </div>

            <div style={{height:'440px',width:'228px',float:'left',marginLeft:'10px'}}>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>Last Name</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter last name"/>

                <br></br>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>Email</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter email address"/>

                <br></br>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>Specialization</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter specialization"/>

                <br></br>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>Gender</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} placeholder="Enter gender"/>

                <br></br>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>DOB</label>
                <br></br>
                <input className="form-control" type="date" style={{width:'100%',fontSize:'15px'}} placeholder="Enter DOB"/>

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