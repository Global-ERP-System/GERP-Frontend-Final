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
                                <body style={{background:'#ff5200',marginTop:'9%',marginBottom:'5%'}}>
                                <div classsName="container"style={{marginLeft:'10%',padding:'10%',width:'80%'}}>
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
                                                        <div class="col">
                                                            <label>DOB :</label>
                                                           <input type='date' class="form-control" placeholder="Enter your DOB" style={{width:'25%'}}/>
                                                        </div>
                                                    </div>
                                                
                                                
                                                    <div class="form-row">
                                                        <div class="col"style={{marginLeft:'60%',marginTop:'-60px'}}>
                                                            <label>Gender :</label>
                                                            <select style={{width:'40%',marginLeft:'1%'}}>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                                <option value="Transgender">Transgender</option>
                                                            </select>
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
                                                <button type="button" class="btn btn-primary btn-sm" style={{backgroundColor:'#138808'}}><a style={{color:'white'}} className="nav-link" href="/community">Sign up</a></button>
                                                </div>
                                            </CardText> 

                                            <a href="#" class="request">Request for a Master Account</a>
                                            
                                        </CardBody>   
                                    </Card>
                                </form>
                                
                            </div>
                            </body>
                            ); 
                        }}/>
                        </switch>
            </Router>
            );
    }
}

export default Signup;