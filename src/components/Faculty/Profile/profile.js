import React, { Component } from "react";  
import { Row, Col } from 'reactstrap';
import './profile.css'
// import editprofile from './editprofile'
import Create from "./Modal"
import Create1 from "./Modal1"
import Create2 from "./Modal2"
class Profile extends Component{

    scrollFunc=(height)=>{
        window.scrollTo({top:height,behavior:'smooth'});
    }
    constructor(props){
        super(props);
        this.state = {
        institute: '     SRIT',
        firstName: 'Angelina ',
        lastName:'reddy',
        parentName : 'xyz',
        // registrationNumber : '0000',
        // rollNumber : '0123cs12455',
        bloodGroup : 'B+',
        campusCode : '0205',
        email: 'abc@gmail.com',
        phoneno: '1234567890',
        // Senior_Secondary_school: '12',
        // Secondary_school: '10',
        master:'12',
        bachelor:'10',
        other: 'none',
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
            <Row className='Body' style={{marginLeft: '0px', marginRight: '0px'}}>
                <Col sm={3} className="sidebar">
                    <div style={{marginBottom: '15px'}}>
                   
                        <div id="sidebar_image">
                            <img alt='' src="https://scriptshadow.net/wp-content/uploads/2019/08/Screen-Shot-2019-08-13-at-8.09.58-PM.png" style={{ width: '200px', height: '200px', borderRadius: '200%' }}></img>
                        </div>
                        <div id="sidebar_element" style={{ marginTop: '40px' }}>
                            <span id='name-2'>Angelina Reddy</span>
                        </div>
                        <div id="sidebar_element">
                            <a href="#profile" onClick={()=>this.scrollFunc(this.instance1.offsetTop)}>My Profile</a>
                        </div>

                            <div id="sidebar_element">
                            <a href="#qualification" onClick={()=>this.scrollFunc(this.instance2.offsetTop)}>Educational Qualifications</a>
                        </div>
                            <div id="sidebar_element">
                            <a href="#experience" onClick={()=>this.scrollFunc(this.instance3.offsetTop)}>Experience</a>
                        </div>
                    </div>

                    
                </Col>


                <Col sm={9} className="right_Sec" style={{padding: '0px 0px'}}>
                    <div className="my_Profile" ref={(e)=>{this.instance1=e}}>
                        <center>
                            <h2>
                                <Row>
                                    <Col sm={10}>
                                        My Profile
                                        </Col>
                                    <Col sm={2}>
                                        <Create />
                                    </Col>
                                </Row>
                           </h2>
                    </center>
                    <Row>
                      <Col sm={9}>
                            <div className="my_profile1">

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
                    </Row>

                    </div>
                        <br></br>

                            <div className="Qualification" ref={(e)=>{this.instance2=e}}>
                        <center>
                            <h2>
                            
                            <Row>
                                    <Col sm={10}>
                                        Qualification
                                        </Col>
                                    <Col sm={2}>
                                        <Create1 />
                                    </Col>
                                </Row>
                            
                            </h2>
                                </center>

                                <Row>

                                    <Col sm={9}>
                                        <div className="my_profile1">
                                            <Row className='myprofileelement'>
                                                <Col sm={5}>
                                                    <label style={{ fontWeight: 'bold' }}>Master's :</label>
                                                    <input class="form-control" value={this.state.master} readonly />
                                                </Col>
                                                <Col sm={1}>
                                                </Col>
                                                <Col sm={5}>
                                           

                                                </Col>
                                            </Row>

                                            <Row className='myprofileelement'>
                                                <Col sm={5}>
                                                    <label style={{ fontWeight: 'bold' }}>Bachelor's :</label>
                                                    <input class="form-control" value={this.state.bachelor} readonly />
                                                </Col>
                                                <Col sm={1}>
                                                </Col>
                                                <Col sm={5}>
                                           
                                                </Col>
                                            </Row>
                                            <Row className='myprofileelement'>
                                                <Col sm={5}>
                                                    <label style={{ fontWeight: 'bold' }}>Any other :</label>
                                                    <input class="form-control" value={this.state.other} readonly />
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




                    <div className="Experience" ref={(e)=>{this.instance3=e}}>
                        <center>
                        <h2>
                            
                            <Row>
                                    <Col sm={10}>
                                        Experience
                                        </Col>
                                    <Col sm={2}>
                                        <Create2 />
                                    </Col>
                                </Row>
                            
                            </h2>
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
                        </Row>
                    </div>
                        </Col>
               
            </Row>
 

        );
    }
}

export default Profile;