import React, { Component } from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from "../signin/signin"
import {Card,CardTitle,CardText,CardBody,CardHeader,CardFooter} from 'reactstrap';
import "./signup.css";

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        };
    }

    render() {
        return (
            <Router>
            <div className="login">
                <form>
                    <Card className="text-centre">
                        <CardHeader>
                            <CardTitle><h3>Sign Up</h3></CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                <div className="form-group">
                                    <div class="form-row">
                                      <div class="col">
                                        <input type="text" class="form-control" placeholder="First name" />
                                      </div>
                                      <div class="col">
                                        <input type="text" class="form-control" placeholder="Last name" />
                                      </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                   <input type="email" className="form-control" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Enter password" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Confirm password" />
                                </div>
                                <fieldset className="form-group">
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" name="radios" id="customradio1" />
                                        <label className="form-check-label" htmlFor="customCheck1">Student</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" name="radios" id="customradio2" />
                                        <label className="form-check-label" htmlFor="customCheck1">Faculty</label>
                                    </div> 
                                </fieldset>
                                <button type="submit" className="btn btn-secondary btn-block">Sign Up</button>
                            </CardText> 
                        </CardBody>   
                        <CardFooter>
                            <p className="forgot-password text-right">Already registered <a href="/signin">sign in?</a> </p>
                        </CardFooter>
                    </Card>
                </form>
            </div>
            <Route path="/signin" component={Login} />
            </Router>
        );
    }
}

export default SignUp;