import React, { Component } from "react";  
import { Col, NavLink} from 'reactstrap';
import avatar from './avatar.png';
import Popup from 'reactjs-popup';

import './profile.css'
import { MDBFormInline } from "mdbreact";


class Profile extends Component{
    constructor(props){
        super(props);
    this.state = {
        fullName : 'ABC             ',
        address : 'xyz',
        registrationNumber : '0000',
        phoneNumber : '0000',
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
            <div style={{textAlign:"center"}}>

                <div style={{ marginTop: "70px" }}>
                    <img src={avatar} alt="avatar" className="img-thumbnail" />
                    <div style={{marginLeft:"30%",width:"40%",alignContent:"center"}}>
                        <MDBFormInline className="justify-content-md-center">
                            <NavLink href="/">
                                <Col style={{color:'blue'}}>Add Photo</Col>
                            </NavLink>
                            <NavLink href="/">
                                <Col style={{color:'blue'}} md="auto">Remove Photo</Col>
                            </NavLink>

                        </MDBFormInline>
                    </div>
                </div>


                <h1 id='title'>My Profile</h1>
                <div>
                <div style={{marginLeft:"30%",width:"40%",alignContent:"center"}}>
                    <MDBFormInline >
                        <Col className="column">Full Name</Col>
                        <Col style={{marginLeft:"20%"}} className="column">{this.state.fullName}</Col>
                    </MDBFormInline>
                    <MDBFormInline>
                        <Col className="column">Address</Col>
                        <Col style={{marginLeft:"20%"}} className="column">{this.state.address}</Col>
                    </MDBFormInline>
                    <MDBFormInline>
                        <Col className="column">Registration Number</Col>
                        <Col style={{marginLeft:"20%"}} className="column">{this.state.registrationNumber}</Col>
                    </MDBFormInline>
                    <MDBFormInline>
                        <Col className="column">Phone Number</Col>
                        <Col style={{marginLeft:"20%"}} className="column">{this.state.phoneNumber}</Col>
                    </MDBFormInline>
                    <MDBFormInline>
                        <Col className="column">Blood Group</Col>
                        <Col style={{marginLeft:"20%"}} className="column">{this.state.bloodGroup}</Col>
                    </MDBFormInline>
                    <MDBFormInline>
                        <Col className="column">Campus Code</Col>
                        <Col style={{marginLeft:"20%"}} className="column">{this.state.campusCode}</Col>
                    </MDBFormInline>
                    <MDBFormInline>
                        <Col className="column">E-mail Id</Col>
                        <Col style={{marginLeft:"20%"}} className="column">{this.state.email}</Col>
                    </MDBFormInline>
                </div>
                </div>

                <div id="button">


                <Popup className='popup' trigger={<button style={{marginLeft: "40%", fontSize: "15px"}}><b style={{color:'white'}}>Enter Campus Code</b></button>} position="right bottom">
                        
                        {close => (
                        <div>
                            <a href className="close" onClick={close}>
                        &times;
                        </a>
                        </div>
                        )}

                    <form className="form-group">
                            
                            <label>Campus Code :</label>		                    
                            <input className="form-control"  placeholder="Campus Code"
                             name="campusCode"
                             value={ this.state.campusCode }
                             onChange={ this.handleChange } />
                        
                            <br/>
                    </form>

                        <div style={{textAlign:'center'}}>
                            <button  type='submit' style={{marginLeft: "40%", fontSize: "15px"}} onClick={ this.publish }><b style={{color:'white'}}>Submit</b></button>
                        </div>
                    
                    </Popup>


                   
                    <Popup className='popup' trigger={<button style={{marginLeft: "50px", fontSize: "15px"}}><b style={{color:'white'}}>Edit Details</b></button>} position="right bottom">
                        
                        {close => (
                        <div>
                            <a href className="close" onClick={close}>
                        &times;
                        </a>
                        </div>
                        )}
                            

                            <h3 id='title'>My Profile</h3>
                           
                            <form className="form-group">
                            
		                        <label>Full Name :</label><br/>		                    
                                <input className="form-control" placeholder="Full Name"
                                 name="fullName" 
                                 value={ this.state.fullName }
                                 onChange={ this.handleChange } />
                            
                                <br/>
                                
                                <label>Registration Number :</label><br/>		                    
                                <input className="form-control"  placeholder="Registration Number"
                                name="registrationNumber" 
                                value={ this.state.registrationNumber}
                                onChange={ this.handleChange }/>
                           <br/>
                            
                                <label>Phone Number :</label>  <br/>                         
		                        <input className="form-control" placeholder="Phone Number"
                                name="phoneNumber" 
                                value={ this.state.phoneNumber }
                                onChange={ this.handleChange }/>
                            <br/>
                            
                                <label>Blood Group :</label> <br/>                           
		                        <input className="form-control"  placeholder="Blood Group"
                                name="bloodGroup" 
                                value={ this.state.bloodGroup}
                                onChange={ this.handleChange }/>
                            <br/>
                            
                                <label>E-mail ID :</label><br/>                           
		                        <input className="form-control" type="email" placeholder="Email"
                                name="email" 
                                value={ this.state.email }
                                onChange={ this.handleChange }/><br/>
                            
                                <label>Address :</label> <br/>                           
		                        <textarea className="form-control" type="text" placeholder="Address"
                                name="address" 
                                value={ this.state.address }
                                onChange={ this.handleChange }/><br/>
                            </form>                        
                            
                            <div style={{textAlign:'center'}}>
                            <button  type='submit' style={{marginLeft: "40%", fontSize: "15px"}} onClick={ this.publish }><b style={{color:'white'}}>Submit</b></button>
                            </div>
                    
                    </Popup>
                </div>
            </div>


        );
    }
}

export default Profile;