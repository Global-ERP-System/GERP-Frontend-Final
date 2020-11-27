import React, { Component } from "react";
import { Card, CardTitle, CardText, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./signup_style.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dob: "",
      gender: "",
      email: "",
      password: "",
      code: "",
      role: "Student",
    };
    // this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleClick() {
    //alert("Current state is "+ JSON.stringify(this.state));
    this.state.role === "Student"
      ? this.props.clickFunc()
      : this.props.clickFuncStaff();
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  /* handleSubmit(event){ 
        console.log("Current state is "+ JSON.stringify(this.state));
        alert("Current state is "+ JSON.stringify(this.state));
        event.preventDefault();
        this.props.clickFunc();
    }*/

  render() {
    return (
      <Container fluid="lg" className="mt-5 mb-4">
        <div>
          <form>
            {/* <form onSubmit={this.handleSubmit}> */}
            <Card style={{ backgroundColor: "#F2F4F4", marginTop: "0px" }}>
              <CardTitle>
                <h5 className="text-center">SIGN UP AND CREATE YOUR ACCOUNT</h5>
              </CardTitle>
              <CardBody>
                <CardText>
                  <div className="form-group">
                    <div class="form-row">
                      <div class="col">
                        <label>Name:</label>
                        <input
                          class="form-control"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col">
                      <label>E-Mail:</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter Your E-Mail"
                      />
                    </div>
                    <div class="col">
                      <label>Passsword :</label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter your Password"
                      />
                    </div>
                  </div>

                  <div class="form-row" style={{ marginTop: "4%" }}>
                    <div class="col">
                      <label>DOB :</label>
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Enter your DOB"
                      />
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

                  <div class="form-row" style={{ marginTop: "4%" }}>
                    <div class="col">
                      <label>I am:</label>
                      <input
                        type="radio"
                        name="role"
                        value="Student"
                        style={{ marginLeft: "20px" }}
                        onChange={this.handleChange}
                      />{" "}
                      Student
                      <input
                        type="radio"
                        name="role"
                        value="Faculty"
                        style={{ marginLeft: "20px" }}
                        onChange={this.handleChange}
                      />{" "}
                      Faculty
                      {/* <input type='radio'name="role"value="Parent"style={{marginLeft:'20px'}}/> Parent */}
                    </div>
                  </div>

                  <div class="form-row" style={{ marginTop: "4%" }}>
                    <div class="col">
                      <label>I have a campus code:</label>
                      <input
                        type="password"
                        name="code"
                        placeholder="Enter your campus code"
                        style={{ marginLeft: "20px" }}
                      />
                    </div>
                  </div>

                  <div>
                    <p style={{ textAlign: "center", marginTop: "4%" }}>
                      <em>By Sign Up I agree with terms of use</em>
                    </p>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => this.handleClick()}
                    >
                      Sign up
                    </Button>
                    {/* <input type="submit" value="Submit"/> */}
                    {/* <Button color="danger" size="sm"><a style={{color:'white'}}  onClick={()=>this.props.clickFunc()} >Sign up </a></Button> */}
                    {/* <button type="button" class="btn btn-danger btn-sm"><a style={{color:'white'}} className="nav-link" href="/community">Sign up</a></button> */}
                  </div>
                </CardText>
                <Link to="/login" class="back">
                  Go to Login{" "}
                </Link>
                <Link to="#" class="request">
                  Request for a Master Account
                </Link>
              </CardBody>
            </Card>
          </form>
        </div>
      </Container>
    );
  }
}

export default Signup;
