import React, { Component } from "react";
import {Card,CardTitle,CardText,CardBody,Button,CardHeader,CardFooter} from 'reactstrap';
import Community from './Student/Community/Community';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import MainComponent from "./MainComponent";
import "./signup_style.css"
import Login from "./Login";

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
                        <Route path="/login" component={Login} />
                        <Route path="/community" component={Community} />
                        <Route path="/signup" exact render={() => {
                            return(
                                <body>
                                <div classsName="container" style={{margin:'2% 25%'}}>
                                <form onSubmit={this.handleSubmit}>
                                    <Card>
                                        <CardTitle><h5 className="text-center">SIGN UP AND CREATE YOUR ACCOUNT</h5></CardTitle>
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
                                                <div class="form-row">
                                                        <div class="col">
                                                        <label>E-Mail:</label>
                                                        <input type='email' class="form-control" placeholder="Enter Your E-Mail" />
                                                        </div>
                                                        <div class="col">
                                                        <label>Passsword :</label>
                                                           <input type='password'class="form-control" placeholder="Enter your Password" />
                                                        </div>
                                                </div>
                                               
                                                <div class="form-row"  style={{marginTop:'4%'}}>
                                                        <div class="col">
                                                        <label>DOB :</label>
                                                        <input type='date' class="form-control" placeholder="Enter your DOB"/>
                                                        </div>
                                                        <div class="col">
                                                        <label>Gender :</label>
                                                        <select id="inputState" class="form-control">
                                                            <option selected>Other</option>
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                        </select>
                                                        </div>
                                                </div>
                                               
                                             
                                                    <div class="form-row" style={{marginTop:'4%'}}>
                                                        <div class="col">
                                                            <label>I am:</label>
                                                           <input type='radio'name="role"value="Student"style={{marginLeft:'20px'}}/> Student
                                                           <input type='radio'name="role"value="Staff"style={{marginLeft:'20px'}}/> Staff
                                                           <input type='radio'name="role"value="Parent"style={{marginLeft:'20px'}}/> Parent
                                                        </div>
                                                    </div>
                                               
                                                    <div class="form-row" style={{marginTop:'4%'}}>
                                                        <div class="col">
                                                            <label>I have a campus code:</label>
                                                           <input type='password'name="code" placeholder="Enter your campus code"style={{marginLeft:'20px'}}/>
                                                        </div>
                                                    </div>
                                           
                                                <div ><p style={{textAlign:'center', marginTop:'4%'}}><em>By Sign Up I agree with terms of use</em></p></div>
                                                
                                                <div style={{textAlign:"center"}}>
                                                <Button color="danger" size="sm"><a style={{color:'white'}} href="/community">Sign up</a></Button>
                                               {/* <button type="button" class="btn btn-danger btn-sm"><a style={{color:'white'}} className="nav-link" href="/community">Sign up</a></button>*/}
                                                </div>
                                            </CardText> 
                                            <a href="/login" class="back">Go to Login </a>
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