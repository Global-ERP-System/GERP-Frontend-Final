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
                        <Route path="/main" component={MainComponent} />
                        <Route path="/Community" component={Community} />
                        <Route path="/SignUP" component={Signup} />
                        <Route path="/" exact render={() => {
                            return(
                                <div classsName="container"style={{marginLeft:'20%',marginRight:'20%', marginBottom:'5%',marginTop:'5%'}}>
                                <form >
                                    <Card>
                                        <CardTitle><h2 className="text-center">WELCOME</h2></CardTitle>
                                        <CardBody>
                                            <CardText>
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
                                                <div style={{textAlign:"center"}}>
                                                <button type="button" class="btn btn-primary btn-sm"><a style={{color:'white'}} className="nav-link" href="/main">Login In</a></button>
                                                </div>
                                                <hr ></hr>
                                                <div style={{textAlign:"center"}}>
                                                <a className="nav-link" href="/">Sign in with Google</a>
                                                </div>
                                                <div style={{textAlign:"center"}}>
                                                <a className="nav-link" href="/">Forgot Password ?</a>
                                                </div>
                                                <div style={{textAlign:"center"}}>
                                                <button type="button" class="btn btn-primary btn-sm"><a style={{color:'white'}} className="nav-link" href="/SignUP">Sign Up</a></button>
                                                </div>
                                            </CardText> 
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

export default Login;