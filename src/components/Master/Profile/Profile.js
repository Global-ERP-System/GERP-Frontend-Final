import React, { Component } from "react";  
import { Container, Row, Col, Button,NavLink} from 'reactstrap';
import avatar from './avatar.png';
import Popup from 'reactjs-popup';

import './Profile.css'


class Profile extends Component{
    constructor(props){
        super(props);
    this.state = {
        fullName : 'ABC             ',
        address : 'xyz',        
        phoneNumber : '0000',
        bloodGroup : 'B+',        
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
            <div className="Profile">

                <div style={{ marginTop: "80px" }}>
                    <img src={avatar} alt="avatar" className="img-thumbnail" />
                    <div>
                        <Row className="justify-content-md-center">
                            <NavLink href="/">
                                <Col style={{color:'blue'}}>Add Photo</Col>
                            </NavLink>
                            <NavLink href="/">
                                <Col style={{color:'blue'}} md="auto">Remove Photo</Col>
                            </NavLink>

                        </Row>
                    </div>
                </div>

                <h1 id='title'>My Profile</h1>

                <div style={{ width: "800px", margin: "auto",marginLeft:'36%'}}>
                    <Row className="content" xs='2' >
                        <Col className="column">Full Name</Col>
                        <Col className="column">{this.state.fullName}</Col>
                        <Col className="column">Address</Col>
                        <Col className="column">{this.state.address}</Col>                        
                        <Col className="column">Phone Number</Col>
                        <Col className="column">{this.state.phoneNumber}</Col>
                        <Col className="column">Blood Group</Col>
                        <Col className="column">{this.state.bloodGroup}</Col>                        
                        <Col className="column">E-mail Id</Col>
                        <Col className="column">{this.state.email}</Col>
                    </Row>
                </div>

                <div id="button">
                
                   
                    <Popup className='popup' trigger={<button style={{margin: "auto", marginLeft:'47%', fontSize: "17px"}}><b style={{color:'white'}}>Edit Details</b></button>} position="right bottom">
                        
                        {close => (
                        <div>
                            <a className="close" onClick={close}>
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