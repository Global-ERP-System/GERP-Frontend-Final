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