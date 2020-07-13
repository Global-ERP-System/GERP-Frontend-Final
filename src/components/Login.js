import React, { Component } from "react";
import {Card,CardTitle,CardText,CardBody,Button,CardHeader,CardFooter} from 'reactstrap';
import MainComponent from "./MainComponent";

import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import Community from './Student/Community/Community';
import Signup from './signup';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn:false
        }
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    
    onButtonClick() {
        this.setState({
            isLoggedIn: true
        });
        
    }
   
    render() {
               
                return (
                    <Router>
                        <switch>
                        {/* <Route path="/main" component={MainComponent} /> */}
                        <Route path="/Community" component={Community} />
                        <Route path="/SignUP" component={Signup} />
                        <Route path="/finalfrontend" exact render={() => {
                            return(
                                <body style={{background:'#ff5200',marginTop:'9%'}}>
                                <div classsName="container"style={{marginLeft:'10%',marginBottom:'5%',marginTop:'5%',padding:'10%',width:'80%'}}>
                                <form >
                                    <Card>
                                        <CardTitle><h2 className="text-center"style={{fontFamily:'Montserrat Regular 700'}}>LOGIN</h2></CardTitle>
                                        <CardBody>
                                            <CardText>
                                                <div className="form-group">
                                                    <div class="form-row">
                                                      <div class="col">
                                                        <label>E-Mail:</label>
                                                        <input type='email' class="form-control" placeholder="Enter Your E-Mail"/>
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
                                                <div style={{textAlign:"center"}}>
                                                <button type="button" class="btn btn-primary btn-sm" style={{backgroundColor:'#138808'}}><a style={{color:'white'}} className="nav-link" href="/community">Login</a></button>
                                                </div>
                                                <hr class="line"style={{border: '1px dashed grey'}}></hr>
                                                <div style={{textAlign:"center"}}>
                                                <a className="nav-link" href="/">Sign in with Google</a>
                                                </div>
                                                <div className="circle"style={{height:'30px',width:'30px',borderRadius:'60%',backgroundColor:'#bbb',marginLeft:'47%'}}>
                                                    <span style={{fontSize:'12px',paddingLeft:'6px'}}>OR</span>
                                                </div>
                                                <div style={{textAlign:"center"}}>
                                                <a className="nav-link" href="/">Not yet created an account?</a>
                                                </div>
                                                <div style={{textAlign:"center"}}>
                                                <button type="button" class="btn btn-primary btn-sm" style={{backgroundColor:'#138808'}}><a style={{color:'white'}} className="nav-link" href="/SignUP">Sign Up</a></button>
                                                </div>
                                            </CardText>
                                            <br></br>
                                            <span style={{float:'right',fontSize:'12px'}}><a href="#">Forgot password?</a></span> 
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

export default Login;