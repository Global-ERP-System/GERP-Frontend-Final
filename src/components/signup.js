import React, { Component } from "react";
import {Card,CardTitle,CardText,CardBody,Button,CardHeader,CardFooter} from 'reactstrap';
import Community from './Student/Community/Community';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import MainComponent from "./MainComponent";
import "./signup_style.css"

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
                name:'',
                dob:'',
                gender:'',
                email:'',
                password:'',
                code:'',
                check:false,
        }
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    
    onButtonClick() {
        this.setState({
            isLoggedIn: true
        });
        
    }
   
    handleSubmit(event){ 
        console.log("Current state is "+ JSON.stringify(this.state));
        alert("Current state is "+ JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
                return (
                    <Router>
                        <switch>
                        <Route path="/main" component={MainComponent} />
                        <Route path="/Community" component={Community} />
                        <Route path="/signup" exact render={() => {
                            return(
                                <div classsName="container"style={{marginLeft:'20%',marginRight:'20%', marginBottom:'5%',marginTop:'5%'}}>
                                <form onSubmit={this.handleSubmit}>
                                    <Card>
                                        <CardTitle><h2 className="text-center">SIGN UP AND CREATE YOUR ACCOUNT</h2></CardTitle>
                                        <CardBody>
                                            <CardText>
                                            <div className="form-group">
                                                    <div class="form-row">
                                                      <div class="col">
                                                        <label>Name:</label>
                                                        <input class="form-control" placeholder="Enter Your Name" />
                                                      </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div class="form-row">
                                                      <div class="col">
                                                        <label>E-Mail:</label>
                                                        <input type='email' class="form-control" placeholder="Enter Your E-Mail" />
                                                      </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div class="form-row">
                                                        <div class="col">
                                                            <label>Passsword :</label>
                                                           <input type='password'class="form-control" placeholder="Enter your Password" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div class="form-row">
                                                        <div class="col" md={6}>
                                                            <label>DOB :</label>
                                                           <input type='password'class="form-control" placeholder="Enter your DOB" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div class="form-row">
                                                        <div class="col">
                                                            <label>Gender :</label>
                                                           <input type='password'class="form-control" placeholder="Enter your Gender" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div class="form-row">
                                                        <div class="col">
                                                            <label>I am:</label>
                                                           <input type='radio'name="role"value="Student"style={{marginLeft:'20px'}}/> Student
                                                           <input type='radio'name="role"value="Staff"style={{marginLeft:'20px'}}/> Staff
                                                           <input type='radio'name="role"value="Parent"style={{marginLeft:'20px'}}/> Parent
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <div class="form-row">
                                                        <div class="col">
                                                            <label>I have a campus code:</label>
                                                           <input type='password'name="code" placeholder="Enter your campus code"style={{marginLeft:'20px'}}/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <CardTitle><p classs="agree"style={{marginLeft:'40px'}}>By Sign Up I agree with terms of use</p></CardTitle>
                                                
                                                <div style={{textAlign:"center"}}>
                                                <button type="button" class="btn btn-primary btn-sm"><a style={{color:'white'}} className="nav-link" href="/main">Sign up</a></button>
                                                </div>
                                            </CardText> 

                                            <a href="#" class="request">Request for a Master Account</a>
                                            
                                        </CardBody>   
                                    </Card>
                                </form>
                                
                            </div>
                            ); 
                        }}/>
                        </switch>
            </Router>
            );
    }
}

export default Signup;