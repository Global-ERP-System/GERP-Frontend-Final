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
            <div style={{textAlign:"center"}}>

                <div style={{ marginTop: "70px" }}>
                    <img src={avatar} alt="avatar" className="img-thumbnail" />
                    <div style={{marginLeft:"40%",width:"40%",alignContent:"center"}}>
                        <MDBFormInline>
                            <NavLink href="/">
                                <Col style={{color:'blue'}} md="auto">Add Photo</Col>
                            </NavLink>
                            <NavLink href="/">
                                <Col style={{color:'blue'}} md="auto">Remove Photo</Col>
                            </NavLink>

                        </MDBFormInline>
                    </div>
                </div>

                <h1 id='title'>My Profile</h1>

                <div>
                    <div style={{marginLeft:"40%",width:"40%",alignContent:"center"}}>
                        <MDBFormInline>
                            <div className="column">Full Name</div>
                            <div style={{marginLeft:"20%"}} className="column">{this.state.fullName}</div>
                        </MDBFormInline>
                        <MDBFormInline>
                            <div className="column">Parent Name</div>
                            <div style={{marginLeft:"16%"}} className="column">{this.state.parentName}</div>
                        </MDBFormInline>
                        
                        <MDBFormInline>
                        <div className="column">Registration Number</div>
                        <div style={{marginLeft:"5%"}} className="column">{this.state.registrationNumber}</div>
                        </MDBFormInline>
                        <MDBFormInline>
                        <div className="column">Roll Number</div>
                        <div style={{marginLeft:"17%"}} className="column">{this.state.rollNumber}</div>
                        </MDBFormInline>
                        <MDBFormInline>
                        <div className="column">Blood Group</div>
                        <div style={{marginLeft:"17%"}} className="column">{this.state.bloodGroup}</div>
                        </MDBFormInline>
                        <MDBFormInline>
                        <div className="column">Campus Code</div>
                        <div style={{marginLeft:"14%"}} className="column">{this.state.campusCode}</div>
                        </MDBFormInline>
                        <MDBFormInline>
                        <div className="column">E-mail Id</div>
                        <div style={{marginLeft:"22%"}} className="column">{this.state.email}</div>
                        </MDBFormInline>
                        <br/>
                    </div>
                </div>

                <div style={{marginLeft:"3%"}}>


                <Popup className='popup' trigger={<button style={{fontSize: "15px"}}><b style={{color:'white'}}>Enter Campus Code</b></button>} position="right bottom">
                        
                        {close => (
                        <div>
                            <a className="close" onClick={close}>
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
                                
                                <label>Registration Number :</label><br/>		                    
                                <input className="form-control"  placeholder="Registration Number"
                                name="registrationNumber" 
                                value={ this.state.registrationNumber}
                                onChange={ this.handleChange }/>
                           <br/>
                            
                                <label>Roll Number :</label>  <br/>                         
		                        <input className="form-control" placeholder="Roll Number"
                                name="rollNumber" 
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
                            
                                <label>Parent Name :</label> <br/>                           
		                        <input className="form-control" type="text" placeholder="Parent Name"
                                name="parentName" 
                                value={ this.state.address }
                                onChange={ this.handleChange }/><br/>
                            </form>                        
                            
                            <div style={{textAlign:'center'}}>
                            <button  type='submit' style={{marginLeft: "40%", fontSize: "15px"}} onClick={ this.publish }><b style={{color:'white'}}>Submit</b></button>
                            </div>
                    
                    </Popup>
                    <br/><br/>
                </div>
            </div>


        );
    }
}

export default Profile;