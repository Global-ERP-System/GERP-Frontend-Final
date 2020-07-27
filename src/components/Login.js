import React, { Component } from "react";
import {Card,CardTitle,CardText,CardBody,Button,CardHeader,CardFooter} from 'reactstrap';
import MainComponent from "./MainComponent";

import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import Community from './Student/Community/Community';
import Signup from './signup';

class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            email:'',
            password:'',
            role:'Student'
        }
    }

    

    handleChange = (event) => {
        const target=event.target;
        //const value= target.type == 'checkbox' ? target.checked : target.value;
        const value=target.value;
        const name=target.name;
        this.setState({[name]:value});
           
      };

    handleClick(){
       // alert("Current state is "+ JSON.stringify(this.state));
        this.state.role==='Student'? this.props.clickFunc():this.props.clickFuncStaff();
      //  this.props.clickFunc();
    }
  
    render() {
               
                return (
                                <body>
                                <img src="https://gawvs.in//assets/img/login.png" style={{height:'20%',width:'30%',float:'left',marginLeft:'8%',marginTop:'8%'}}></img>
                                <div classsName="container" style={{margin:'2% 18%',marginTop:'-5%',marginLeft:'40%'}}>
                                <form >
                                    <Card style={{backgroundColor:'#F2F4F4'}}>
                                        <CardTitle><h2 className="text-center"style={{fontFamily:'Montserrat Regular 700'}}>LOGIN</h2></CardTitle>
                                        <CardBody>
                                            <CardText>
                                                <div className="form-group">
                                                    <div class="form-row">
                                                      <div class="col">
                                                        <label>E-Mail:</label>
                                                        <input type='email' className="form-control" name='email' value={this.state.email} onChange={this.handleChange}   placeholder="Enter Your E-Mail" />
                                                      </div>
                                                    </div>
                                                </div>
                                           
                                            <div className="form-group">
                                                <div class="form-row">
                                                    <div class="col">
                                                        <label>Passsword :</label>
                                                        <input type='password'className="form-control" name='password' value={this.state.password} onChange={this.handleChange} placeholder="Enter your Password" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-row" style={{marginTop:'4%'}}>
                                                        <div class="col">
                                                            <label>I am:</label>
                                                           <input type='radio' name="role" value="Student" style={{marginLeft:'20px'}}  onChange={this.handleChange} /> Student
                                                           <input type='radio' name="role" value="Faculty" style={{marginLeft:'20px'}}  onChange={this.handleChange}/> Faculty
                                                        </div>
                                             </div>

                                            <div style={{textAlign:"center"}}>
                                                <Button color="danger" size="sm" onClick={()=>this.handleClick()}  /*onClick={()=>this.props.clickFunc()}*/ > Login </Button>
                                            </div>
                                            <hr class="line"style={{border: '1px dashed grey'}}></hr>
                                            <div style={{textAlign:"center"}}>
                                                <Link className="nav-link" to="#">Sign in with Google</Link>
                                            </div>
                                            <div className="circle"style={{height:'30px',width:'30px',borderRadius:'60%',backgroundColor:'#bbb',marginLeft:'47%'}}>
                                                <span style={{fontSize:'12px',paddingLeft:'6px'}}>OR</span>
                                            </div>
                                            <div style={{textAlign:"center"}}>
                                                Not yet created an account?
                                            </div>
                                            <div style={{textAlign:"center"}}>
                                                <Button color="danger" size="sm" ><Link to='signup' style={{color:'white',textDecoration:'none'}}>Sign Up</Link></Button>
                                            </div>
                                        </CardText>
                                        <br></br>
                                        <span style={{float:'right',fontSize:'12px'}}><Link to="#" style={{textDecoration:'none'}}>Forgot password?</Link></span> 
                                    </CardBody>   
                                </Card>
                            </form>
                            </div>
                    </body>
                      ); 
              
            }
}

export default Login;