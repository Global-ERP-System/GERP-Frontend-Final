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
        institute: '     SRIT',
        fullName : 'Vaibhav Singh ',
        parentName : 'xyz',
        registrationNumber : '0000',
        rollNumber : 'rollno.',
        bloodGroup : 'B+',
        campusCode : '0205',
        email: 'abc@gmail.com',
        phoneno: '1234567890',
        Senior_Secondary_school: '12',
        Secondary_school: '10',
        Ug: 'none',
        award: 'none',
        courses: 'none',
        internship: 'none',
        tranning: 'none'
       
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
                <div id="sidebar">
                {
                
                        <div id="main_box">
                            
                            <div id="upper-part">
                                <p id="myprofile">My Profile</p>
                            </div>
                        
                            <div className="form-group" style={{marginLeft:'3%'}}>
                                <div class="form-row" style={{width:'25%',marginTop:'3%'}}>
                                    <div class="col">
                                        <label style={{fontWeight:'bold'}}>First Name:</label>
                                        <input class="form-control" value="Angelina" readonly/>
                                    </div>
                                </div>
                                <br></br>

                                <div class="form-row" style={{width:'25%',marginTop:'1%'}}>
                                    <div class="col">
                                        <label style={{fontWeight:'bold'}}>Last Name:</label>
                                        <input class="form-control" value="Reddy" readonly/>
                                    </div>
                                </div>
                                <br></br>

                                <div class="form-row" style={{width:'25%',marginTop:'1%'}}>
                                    <div class="col">
                                        <label style={{fontWeight:'bold'}}>Email:</label>
                                        <input class="form-control" value="angelina.123@gmail.com" readonly/>
                                    </div>
                                </div>
                                <br></br>

                                <div class="form-row" style={{width:'25%',marginTop:'1%'}}>
                                    <div class="col">
                                        <label style={{fontWeight:'bold'}}>About Me:</label>
                                        <input class="form-control" value="about me" readonly/>
                                    </div>
                                </div>

                            </div>


                            <div className="form-group" style={{marginLeft:'33%',marginTop:'-30.5%'}}>
                                <div class="form-row" style={{width:'35%',marginTop:'2%'}}>
                                    <div class="col">
                                        <label style={{fontWeight:'bold'}}>Registration No:</label>
                                        <input class="form-control" value="A213665O" readonly/>
                                    </div>
                                </div>
                                <br></br>

                                <div class="form-row" style={{width:'35%',marginTop:'1%'}}>
                                    <div class="col">
                                        <label style={{fontWeight:'bold'}}>Parent Name:</label>
                                        <input class="form-control" value="Mr. Sushil Kumar" readonly/>
                                    </div>
                                </div>
                                <br></br>

                                <div class="form-row" style={{width:'35%',marginTop:'1%'}}>
                                    <div class="col">
                                        <label style={{fontWeight:'bold'}}>Password:</label>
                                        <input class="form-control" value="123angel@45" type="password" readonly/>
                                    </div>
                                </div>
                                <br></br>

                                <div class="form-row" style={{width:'35%',marginTop:'1%'}}>
                                    <div class="col">
                                        <label style={{fontWeight:'bold'}}>Blood Group:</label>
                                        <input class="form-control" value="A+" readonly/>
                                    </div>
                                </div>

                            </div>

                            <div id="image">
                                <img src="https://scriptshadow.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-13-at-8.09.58-PM.png" style={{width:'100%',height:'230px'}}></img>
                            </div>

                        </div>
                
                /* <Row>
                    <Col sm={4 }>

                        <img src={avatar} alt="avatar" style={{ borderRadius: '200px', width: '200', height: '200', marginTop:'20px' }} className="img-thumbnail" />
    
                    </Col>
                    <Col sm={5}>
                        <div style={{ marginTop: "40px" }}>
                            <div className="column" id='infohead'>{this.state.fullName}</div>
                            <div className="column" id='info'>{this.state.rollNumber}</div>
                            <div className="column" id='info'>{this.state.campusCode}    {this.state.institute}</div>

                          


                        </div>
                    </Col>
                    <Col sm={3}> */}

                        {/*

                        <Popup className='popup' trigger={<button style={{ fontSize: "15px", marginTop: '50px'}}><b style={{ color: 'white' }}>Enter Campus Code</b></button>}>

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
                                <button type='submit' style={{ fontSize: "15px" }} onClick={this.publish}><b style={{ color: 'white' }}>Submit</b></button>
                            </div>

                        </Popup>
                        */}
                    {/* </Col>
                </Row>
                <br/>
                <hr></hr>
                <br/>


                <div id="profile_content" >
                     


                <Row id="infohead">
                        <Col sm={8}> <h3 style={{ fontFamily: 'Montserrat', fontWeight: '700' }}> About</h3></Col>



                    <Col sm={4}>

                        <Popup className='popup' trigger={<button style={{ marginLeft: "50px", fontSize: "15px" }}><b style={{ color: 'white' }}>Edit Details</b></button>} >

                            {close => (
                                <div>
                                    <a className="close" onClick={close}>
                                        &times;
                        </a>
                                </div>
                            )}


                            <h3 id='title'>About</h3>

                            <form className="form-group">

                                <label>Full Name :</label>
                                <input className="form-control" placeholder="Full Name"
                                    name="fullName"
                                    value={this.state.fullName}
                                    onChange={this.handleChange} />
                                   

                                    <label>Parent Name :</label>
                                    <input className="form-control" placeholder="Parent Name"
                                    name="parentName"
                                    value={this.state.address}
                                    onChange={this.handleChange} />
                                   

                                <label>Phone Number :</label>
                                <input className="form-control" placeholder="Phone Number"
                                    name="Phone number"
                                    value={this.state.phoneno}
                                    onChange={this.handleChange} />
                                
                                <label>Senior Secondary school :</label> 
                                <input className="form-control"  placeholder="Senior Secondary school "
                                    name="Senior Secondary school"
                                    value={this.state.Senior_Secondary_school}
                                        onChange={this.handleChange} />


                                <label>Secondary school :</label>
                                <input className="form-control" placeholder="Secondary school "
                                    name="Secondary school :"
                                    value={this.state.Secondary_school}
                                    onChange={this.handleChange} />

                                <label>Any other / Ug</label>
                                <input className="form-control"  placeholder="Any other / Ug"
                                    name="Any other / Ug"
                                    value={this.state.Ug}
                                    onChange={this.handleChange} />
                                

                                <label>Blood Group :</label> 
                                <input className="form-control" placeholder="Blood Group"
                                    name="bloodGroup"
                                    value={this.state.bloodGroup}
                                    onChange={this.handleChange} />
                                

                                <label>E-mail ID :</label>
                                <input className="form-control" type="email" placeholder="Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange} /><br />

                                
                            </form>

                            <div style={{ textAlign: 'center' }}>
                                <button type='submit' style={{ marginLeft: "40%", fontSize: "15px" }} onClick={this.publish}><b style={{ color: 'white' }}>Submit</b></button>
                            </div>

                        </Popup>

                    </Col>
                </Row>
                


                <Row>




                    <Col sm={10}>
                        <div>
                            <div>

                                <Row>
                                    <Col sm={6}>
                                        <div className="column" id='info'>Registration Number</div></Col>
                                    <Col sm={6}>
                                        <div className="column">{this.state.registrationNumber}</div>
                                    </Col>


                                </Row>

                                <Row>
                                    <Col sm={6}>
                                            <div className="column" id='info'>Full Name</div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="column">{this.state.fullName}</div>
                                    </Col>

                                </Row>


                                <Row>
                                    <Col sm={6}>
                                            <div className="column" id='info'>Parent Name</div>

                                    </Col>
                                    <Col sm={6}>
                                        <div className="column">{this.state.parentName}</div>
                                    </Col>

                                </Row>



                                <Row>
                                    <Col sm={6}>
                                            <div className="column" id='info'>Phone number</div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="column">{this.state.phoneno}</div>
                                    </Col>

                                </Row>
                               
                              


                                <Row>
                                    <Col sm={6}>
                                            <div className="column" id='info'>Senior Secondary school :</div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="column">{this.state.Senior_Secondary_school}</div>
                                    </Col>

                                </Row>



                                <Row>
                                    <Col sm={6}>
                                            <div className="column" id='info'>Secondary school :</div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="column">{this.state.Secondary_school}</div>
                                    </Col>

                                </Row>


                                <Row>
                                    <Col sm={6}>
                                            <div className="column" id='info'>Any other / Ug</div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="column">{this.state.Ug}</div>
                                    </Col>

                                </Row>


                                <Row>
                                    <Col sm={6}>
                                            <div className="column" id='info'>Blood Group</div>

                                    </Col>
                                    <Col sm={6}>
                                            <div className="column" >{this.state.bloodGroup}</div>
                                    </Col>

                                </Row>


                               
                                <Row>
                                    <Col sm={6}>
                                            <div className="column" id='info'>E-mail Id</div>

                                    </Col>
                                    <Col sm={6}>
                                        <div className="column">{this.state.email}</div>
                                    </Col>

                                </Row>




                            </div>
                        </div>

                        
                    </Col>


                </Row>


                <br></br>
                <hr></hr>
                <br></br>



                    <Row id="infohead">
                        <Col sm={8}> <h3 style={{ fontFamily: 'Montserrat', fontWeight: '700' }}>Experience</h3></Col>

                     
                   
                    <Col sm={4}>

                        <Popup className='popup' trigger={<button style={{ marginLeft: "50px", fontSize: "15px" }}><b style={{ color: 'white' }}>Edit Details</b></button>} >

                            {close => (
                                <div>
                                    <a className="close" onClick={close}>
                                        &times;
                        </a>
                                </div>
                            )}


                            <h3 id='title'>Experience</h3>

                            <form className="form-group">

                                <label>Tranning</label>
                                <input className="form-control" placeholder="Tranning"
                                    name="Tranning"
                                    value={this.state.tranning}
                                    onChange={this.handleChange} />

                                

                                <label>Internship :</label>
                                <input className="form-control" placeholder="Internship"
                                    name="Internship"
                                    value={this.state.internship}
                                    onChange={this.handleChange} />
                               

                                <label>Other certification/courses :</label>  
                                <input className="form-control" placeholder="Other certification/courses"
                                    name="Other certification/courses"
                                    value={this.state.courses}
                                    onChange={this.handleChange} />
                         
                                <label>Honor/ Award :</label>
                                <input className="form-control" placeholder="Honor/ Award"
                                    name="Honor/ Award"
                                    value={this.state.award}
                                    onChange={this.handleChange} />
                                
                            </form>

                            <div style={{ textAlign: 'center' }}>
                                <button type='submit' style={{ marginLeft: "40%", fontSize: "15px" }} onClick={this.publish}><b style={{ color: 'white' }}>Submit</b></button>
                            </div>

                        </Popup>

                    </Col>
                </Row>


                <Row>




                    <Col sm={10}>
                        <div>
                            <div>

                                <Row>
                                    <Col sm={6}>
                                            <div className="column" id='info'> Tranning</div></Col>
                                    <Col sm={6}>
                                        <div className="column">{this.state.tranning}</div>
                                    </Col>


                                </Row>

                                <Row>
                                    <Col sm={6}>
                                            <div className="column" id='info'>Internship</div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="column">{this.state.internship}</div>
                                    </Col>

                                </Row>


                                <Row>
                                    <Col sm={6}>
                                            <div className="column" id='info'> Other certification/courses</div>

                                    </Col>
                                    <Col sm={6}>
                                        <div className="column">{this.state.courses}</div>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col sm={6}>
                                            <div className="column" id='info'>Honor/ Award</div>

                                    </Col>
                                    <Col sm={6}>
                                        <div className="column">{this.state.award}</div>
                                    </Col>

                                </Row>



                            </div>
                        </div>


                    </Col>


                </Row> */}



                    


                {/* </div> */}






            </div>


        );
    }
}

export default Profile;