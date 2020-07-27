import React, { Component } from "react";  
import { Container, Row, Col, Button,NavLink} from 'reactstrap';
import avatar from './avatar.png';
import Popup from 'reactjs-popup';
import './profile.css'
import { MDBFormInline } from "mdbreact";
// import editprofile from './editprofile'
import Create from "./Modal"


class Profile extends Component{
    constructor(props){
        super(props);
        this.state = {
        institute: '     SRIT',
        firstName: 'Angelina ',
        lastName:'reddy',
        parentName : 'xyz',
        registrationNumber : '0000',
        rollNumber : '0123cs12455',
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
<<<<<<< HEAD
        return (
                <div id="sidebar">
                {
                        
                        <div id="main_box">
                            <div id="circle">
                                <img src="https://scriptshadow.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-13-at-8.09.58-PM.png" style={{width:'100px',height:'100px',borderRadius:'200%'}}></img>
                            </div>

                            <span id="name_side">Angelina Reddy</span>

                            <div id="profile-sec">
                                <a href="#" style={{paddingLeft:'35%',textDecoration:'none',color:'black'}}>My Profile</a>
                            </div>

                            <div id="education">
                                <a href="#" style={{paddingLeft:'20%',textDecoration:'none',color:'black'}}>Educational Qualifications</a>
                            </div>

                            <div id="experience">
                                <a href="#" style={{paddingLeft:'35%',textDecoration:'none',color:'black'}}>Experience</a>
                            </div>


                            <div id="upper-part">
                                <p id="myprofile">My Profile</p>
                                <img src="https://image.flaticon.com/icons/png/512/61/61456.png" style={{float:'right',height:'20px',width:'20px',marginTop:'-6%',marginRight:'3%',cursor:'pointer'}} onClick="make_edit()"></img>
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
                                        <label style={{fontWeight:'bold'}}>Phone No:</label>
                                        <input class="form-control" value="9822436115" readonly/>
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
                                <input style={{border:'0px',marginTop:'2%'}} type="file" />
                            </div>
=======

        
>>>>>>> 6de3245381f249ef2018cdc4183cfb978a062aa2

        return (
            <Row className='Body'>
                <Col sm={3} className="sidebar">
                    <div>
                   
                        <div id="sidebar_image">
                            <img src="https://scriptshadow.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-13-at-8.09.58-PM.png" style={{ width: '200px', height: '200px', borderRadius: '200%' }}></img>
                        </div>
                        <div id="sidebar_element" style={{ marginTop: '40px' }}>
                            <span  >Angelina Reddy</span>
                        </div>
                        <div id="sidebar_element">
                            <a href=".my_profile1" >My Profile</a>
                        </div>

                            <div id="sidebar_element">
                            <a href=".Qualification">Educational Qualifications</a>
                        </div>
                            <div id="sidebar_element">
                            <a href=".Experience">Experience</a>
                        </div>
                    </div>

                    
                </Col>


                <Col sm={9} className="right_Sec" >
                    <div className="my_Profile">
                        <center>
                            <h2>My Profile</h2>

                            <div class="col">
                            <Create />
          
                            </div>

                    </center>
                    
                        
                    <Row>
                        
                        <Col sm={9}>
                            <div className="my_profile1">
                                <Row className='myprofileelement'>
                              <Col sm={5}>
                                   <label style={{ fontWeight: 'bold' }}>Registration Number</label>
                                   <input class="form-control" value={this.state.registrationNumber} readonly />
                                    </Col>
                                    <Col sm={1}>
                                    </Col>
                            <Col sm={5}>
                                  <label style={{ fontWeight: 'bold' }}>Roll no:</label>
                                 <input class="form-control" value={this.state.rollNumber} readonly />
                                
                            </Col>
                         </Row>

                                <Row className='myprofileelement'>
                            <Col sm={5}>
                                <label style={{ fontWeight: 'bold' }}>First Name:</label>
                                <input class="form-control" value={this.state.firstName} readonly />
                                    </Col>
                                    <Col sm={1}>
                                    </Col>
                            <Col sm={5}>
                                <label style={{ fontWeight: 'bold' }}>Last Name:</label>
                                <input class="form-control" value={this.state.lastName} readonly />
                            </Col>
                        </Row>
                                <Row className='myprofileelement'>
                            <Col sm={5}>
                                <label style={{ fontWeight: 'bold' }}>Parent Name:</label>
                                <input class="form-control" value={this.state.parentName} readonly />
                                    </Col>
                                    <Col sm={1}>
                                    </Col>
                            <Col sm={5}>
                                <label style={{ fontWeight: 'bold' }}>Email:</label>
                                <input class="form-control" value={this.state.email} readonly />
                            </Col>
                        </Row>

                                <Row className='myprofileelement'>
                            <Col sm={5}>
                                <label style={{ fontWeight: 'bold' }}>Phone no:</label>
                                <input class="form-control" value={this.state.phoneno} readonly />
                                    </Col>
                                    <Col sm={1}>
                                    </Col>
                            <Col sm={5}>
                                <label style={{ fontWeight: 'bold' }}>Blood Group:</label>
                                <input class="form-control" value={this.state.bloodGroup} readonly />                               
                            </Col>
                        </Row>

        



                    </div>
                        </Col>
                        <Col sm={3} className="image">
                            <div >
                                <center>
                                    <img src="https://scriptshadow.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-13-at-8.09.58-PM.png" style={{ width: '230px', height: '230px', alignSelf:"center" }}></img>
                                </center>
                                </div>

                        </Col>
                    </Row>

                    </div>


                            <div className="Qualification">
                        <center>
                            <h2 style={{ marginTop: '40px', paddingTop: '0px' }}>  Qualification</h2>
                                </center>

                                <Row>

                                    <Col sm={9}>
                                        <div className="my_profile1">
                                            <Row className='myprofileelement'>
                                                <Col sm={5}>
                                                    <label style={{ fontWeight: 'bold' }}>Senior Secondary school :</label>
                                                    <input class="form-control" value={this.state.Senior_Secondary_school} readonly />
                                                </Col>
                                                <Col sm={1}>
                                                </Col>
                                                <Col sm={5}>
                                           

                                                </Col>
                                            </Row>

                                            <Row className='myprofileelement'>
                                                <Col sm={5}>
                                                    <label style={{ fontWeight: 'bold' }}>Secondary school :</label>
                                                    <input class="form-control" value={this.state.Secondary_school} readonly />
                                                </Col>
                                                <Col sm={1}>
                                                </Col>
                                                <Col sm={5}>
                                           
                                                </Col>
                                            </Row>
                                            <Row className='myprofileelement'>
                                                <Col sm={5}>
                                                    <label style={{ fontWeight: 'bold' }}>Any other / Ug</label>
                                                    <input class="form-control" value={this.state.Ug} readonly />
                                                </Col>
                                                <Col sm={1}>
                                                </Col>
                                                <Col sm={5}>
                                           
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </div>




                    <div className="Experience">
                        <center>
                            <h2 style={{ marginTop: '40px', paddingTop:'0px' }}> Experience</h2>
                                        </center>

                                        <Row>

                                            <Col sm={9}>
                                                <div className="my_profile1">


                                    <Row className='myprofileelement'>
                                        <Col sm={5}>
                                            <label style={{ fontWeight: 'bold' }}>Tranning:</label>
                                            <input class="form-control" value={this.state.tranning} readonly />
                                        </Col>
                                        <Col sm={1}>
                                        </Col>
                                        <Col sm={5}>
                                            
                                        </Col>
                                    </Row>
                                    <Row className='myprofileelement'>
                                        <Col sm={5}>
                                            <label style={{ fontWeight: 'bold' }}>Internship:</label>
                                            <input class="form-control" value={this.state.internship} readonly />
                                        </Col>
                                        <Col sm={1}>
                                        </Col>
                                        <Col sm={5}>

                                        </Col>
                                    </Row>
                                    <Row className='myprofileelement'>
                                        <Col sm={5}>
                                            <label style={{ fontWeight: 'bold' }}>Other certification/courses:</label>
                                            <input class="form-control" value={this.state.courses} readonly />
                                        </Col>
                                        <Col sm={1}>
                                        </Col>
                                        <Col sm={5}>

                                        </Col>
                                    </Row>

                                    <Row className='myprofileelement'>
                                        <Col sm={5}>
                                            <label style={{ fontWeight: 'bold' }}>Honor/ Award:</label>
                                            <input class="form-control" value={this.state.award} readonly />
                                        </Col>
                                        <Col sm={1}>
                                        </Col>
                                        <Col sm={5}>

                                        </Col>
                                    </Row>




                                </div>
                            </Col>
                            <Col sm={3} className="image">
                                <div >
                                    <center>
                                    </center>
                                </div>

                            </Col>
                        </Row>
                    </div>
                        </Col>
               
            </Row>
 

        );
    }
}

export default Profile;