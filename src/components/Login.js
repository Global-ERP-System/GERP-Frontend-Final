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
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" exact render={() => {
                            return(
                                <body>
                                <img src="https://gawvs.in//assets/img/login.png" style={{height:'20%',width:'30%',float:'left',marginLeft:'8%',marginTop:'8%'}}></img>
                                <div classsName="container" style={{margin:'2% 18%',marginTop:'2%',marginLeft:'40%'}}>
                                <form >
                                    <Card style={{backgroundColor:'#F2F4F4'}}>
                                        <CardTitle><h2 className="text-center"style={{fontFamily:'Montserrat Regular 700'}}>LOGIN</h2></CardTitle>
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
                                                <Button color="danger" size="sm"><a style={{color:'white',textDecoration:'none'}} href="/community">Login</a></Button>
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
                                                <Button color="danger" size="sm"><a style={{color:'white',textDecoration:'none'}} href="/signup">Sign Up</a></Button>
                                            </div>
                                        </CardText>
                                        <br></br>
                                        <span style={{float:'right',fontSize:'12px'}}><a href="#" style={{textDecoration:'none'}}>Forgot password?</a></span> 
                                    </CardBody>   
                                </Card>
                            </form>
                
                        </div>
                    </body>
                ); 
            }
}

export default Login;