import React, { Component } from "react";  
import { Container, Row, Col, Button,NavLink} from 'reactstrap';
import avatar from './avatar.png';
import Popup from 'reactjs-popup';
import './profile.css'
import { MDBFormInline } from "mdbreact";


class Profile extends Component{
    constructor(props){
        super(props);
    this.state = {
        fullName : 'ABC             ',
        parentName : 'xyz',
        registrationNumber : '0000',
        rollNumber : '0000',
        bloodGroup : 'B+',
        campusCode : 'xxxx',
        email : 'abc@gmail.com'
       
    }

    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
}

handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  publish() {
    console.log( this.state.fullName, this.state.address );
  }

    render()  {
        return (
            <div id='main_box'>
                <h1 id='title' style={{ marginTop:'0px' }}>My Profile</h1>
                <Row>
                    <Col sm={5}>
                        <div style={{ marginTop: "40px" }}>
                            <img src={avatar} alt="avatar" className="img-thumbnail" />

                            <Row>
                                <Col sm={6}>
                                    <NavLink href="/">
                                        <Col style={{ color: 'blue' }} md="auto">Add Photo</Col>
                                    </NavLink>
                                </Col>
                                <Col sm={6}>
                                    <NavLink href="/">
                                        <Col style={{ color: 'blue' }} md="auto">Remove Photo</Col>
                                    </NavLink>
                                </Col>

                            </Row>


                        </div>
                    </Col>



                    <Col sm={7}>
                        <div>
                            <div>
                              
                                    <Row>
                                        <Col sm={6}>
                                            <div className="column">Full Name</div>
                                        </Col>
                                        <Col sm={6}>
                                            <div className="column">{this.state.fullName}</div>
                                        </Col>

                                </Row>


                                <Row>
                                    <Col sm={6}>
                                        <div className="column">Parent Name</div>
                                       
                                    </Col>
                                    <Col sm={6}>
                                        <div  className="column">{this.state.parentName}</div>
                                    </Col>

                                </Row>




                                <Row>
                                    <Col sm={6}>
                                        <div className="column">Registration Number</div></Col>
                                    <Col sm={6}>
                                            <div className="column">{this.state.registrationNumber}</div>
                                        </Col>
                                    

                                </Row>



                                <Row>
                                    <Col sm={6}>
                                        <div className="column">Roll Number</div>
                                                                          </Col>
                                    <Col sm={6}>
                                        <div   className="column">{this.state.rollNumber}</div> 
                                    </Col>

                                </Row>




                                <Row>
                                    <Col sm={6}>
                                        <div className="column">Blood Group</div>
                                      
                                    </Col>
                                    <Col sm={6}>
                                        <div   className="column">{this.state.bloodGroup}</div>
                                    </Col>

                                </Row>


                                <Row>
                                    <Col sm={6}>
                                        <div className="column">Campus Code</div>
                                    </Col>
                                    <Col sm={6}>
                                        <div   className="column">{this.state.campusCode}</div>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <div className="column">E-mail Id</div>
                                      
                                    </Col>
                                    <Col sm={6}>
                                        <div   className="column">{this.state.email}</div>
                                    </Col>

                                </Row>
                                    
                                    
                                
                               
                            </div>
                        </div>

                        <div style={{ marginLeft: "3%" }}>


                            <Popup className='popup' trigger={<button style={{ fontSize: "15px" }}><b style={{ color: 'white' }}>Enter Campus Code</b></button>} position="right bottom">

                                {close => (
                                    <div>
                                        <a className="close" onClick={close}>
                                            &times;
                        </a>
                                    </div>
                                )}

                                <form className="form-group">

                                    <label>Campus Code :</label>
                                    <input className="form-control" placeholder="Campus Code"
                                        name="campusCode"
                                        value={this.state.campusCode}
                                        onChange={this.handleChange} />

                                    <br />
                                </form>

                                <div style={{ textAlign: 'center' }}>
                                    <button type='submit' style={{ marginLeft: "40%", fontSize: "15px" }} onClick={this.publish}><b style={{ color: 'white' }}>Submit</b></button>
                                </div>

                            </Popup>



                            <Popup className='popup' trigger={<button style={{ marginLeft: "50px", fontSize: "15px" }}><b style={{ color: 'white' }}>Edit Details</b></button>} position="right bottom">

                                {close => (
                                    <div>
                                        <a className="close" onClick={close}>
                                            &times;
                        </a>
                                    </div>
                                )}


                                <h3 id='title'>My Profile</h3>

                                <form className="form-group">

                                    <label>Full Name :</label><br />
                                    <input className="form-control" placeholder="Full Name"
                                        name="fullName"
                                        value={this.state.fullName}
                                        onChange={this.handleChange} />

                                    <br />

                                    <label>Registration Number :</label><br />
                                    <input className="form-control" placeholder="Registration Number"
                                        name="registrationNumber"
                                        value={this.state.registrationNumber}
                                        onChange={this.handleChange} />
                                    <br />

                                    <label>Roll Number :</label>  <br />
                                    <input className="form-control" placeholder="Roll Number"
                                        name="rollNumber"
                                        value={this.state.phoneNumber}
                                        onChange={this.handleChange} />
                                    <br />

                                    <label>Blood Group :</label> <br />
                                    <input className="form-control" placeholder="Blood Group"
                                        name="bloodGroup"
                                        value={this.state.bloodGroup}
                                        onChange={this.handleChange} />
                                    <br />

                                    <label>E-mail ID :</label><br />
                                    <input className="form-control" type="email" placeholder="Email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange} /><br />

                                    <label>Parent Name :</label> <br />
                                    <input className="form-control" type="text" placeholder="Parent Name"
                                        name="parentName"
                                        value={this.state.address}
                                        onChange={this.handleChange} /><br />
                                </form>

                                <div style={{ textAlign: 'center' }}>
                                    <button type='submit' style={{ marginLeft: "40%", fontSize: "15px" }} onClick={this.publish}><b style={{ color: 'white' }}>Submit</b></button>
                                </div>

                            </Popup>
                            <br /><br />
                        </div>
                    </Col>







                    

                </Row>

               

               

               
            </div>


        );
    }
}

export default Profile;