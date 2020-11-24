import React, { Component } from "react";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Card,CardTitle,CardText,CardBody,CardHeader,CardFooter,ButtonToolbar,Button } from 'reactstrap';
import "./signin.css";
import SignUp from "../signup/signup"
import Assignment from "../Faculty/Assignment/Assignment"
class Login extends Component {
    
        constructor(props){
            super(props);
            this.state={
                email:'',
                password:''
            };
        }

    render(){
        return (
            <Router>
            <div className="login">
                <form>
                    <Card className="text-centre">
                        <CardHeader className="card-header">
                            <CardTitle className="card-title"><h3>SignIn</h3></CardTitle>
                        </CardHeader>
                         <CardBody>
                            <CardText>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" />
                                </div>

                                <button type="submit" className="btn btn-secondary btn-block">Submit</button>
                                <p className="forgot-password text-right">Forgot <a href="#">password?</a></p>
                            </CardText>
                        </CardBody>
                        <CardFooter>New Member?<a href="/signup">Register</a></CardFooter>
                    </Card>

        
                <Route path="/signup" component={SignUp} />
                
                </form>
            </div>
            </Router>
            
        );
    }
}

export default Login;