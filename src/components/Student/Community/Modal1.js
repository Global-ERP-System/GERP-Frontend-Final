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
    <a href="#" className="a_link" onClick={toggle} style={{marginTop:'-5%'}}>View Details</a>
    <Modal isOpen={modal} toggle={toggle} contentClassName="profile-modal"   style={{width:'600px'}}>
      <ModalHeader style={{backgroundColor:'#f5f5f5'}} toggle={toggle} close={closeBtn}>Details</ModalHeader>
      <ModalBody>
      
            <div style={{height:'440px',width:'228px',float:'left'}}>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>First Name</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} value="Abhimanyu" readonly/>

                <br></br>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>Phone No.</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} value="9952137724" readonly/>

                <br></br>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>Organisation</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} value="IIM Lucknow" readonly/>

                <br></br>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>Connections</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} value="230" readonly/>

                <br></br>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>LinkedIn URL</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} value="linkedin.com/abhimanyusingh-123" readonly/>

            </div>

            <div style={{height:'440px',width:'228px',float:'left',marginLeft:'10px'}}>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>Last Name</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} value="Singh" readonly/>

                <br></br>

                <label style={{fontWeight:'bold',fontSize:'14px'}}>Email</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} value="singh_abhi@gmail.com" readonly/>

                <br></br>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>Recommendation Badges</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} value="84" readonly/>

                <br></br>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>Gender</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} value="Male" readonly/>

                <br></br>


                <label style={{fontWeight:'bold',fontSize:'14px'}}>DOB</label>
                <br></br>
                <input className="form-control" style={{width:'100%',fontSize:'15px'}} value="30/07/1997" readonly/>

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