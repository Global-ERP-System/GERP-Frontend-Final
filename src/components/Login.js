import React, { Component } from "react";
import { Card, CardTitle, CardText, CardBody, Button } from "reactstrap";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import logo from "./login_img.png";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      role: "Student",
    };
  }

  handleChange = (event) => {
    const target = event.target;
    //const value= target.type == 'checkbox' ? target.checked : target.value;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleClick() {
    // alert("Current state is "+ JSON.stringify(this.state));
    this.state.role === "Student"
      ? this.props.clickFunc()
      : this.props.clickFuncStaff();
    //  this.props.clickFunc();
  }

  render() {
    return (
      <Container className="mt-5" fluid="md">
        <Row style={{ alignItems: "center" }}>
          <span>
            <img src={logo} alt="img" style={{ width: "100%" }} />
          </span>
          <span style={{ flexGrow: "1", margin: "20px" }}>
            <form>
              <Card style={{ backgroundColor: "#F2F4F4", marginTop: "0" }}>
                <CardTitle>
                  <h2
                    className="text-center"
                    style={{ fontFamily: "Montserrat Regular 700" }}
                  >
                    LOGIN
                  </h2>
                </CardTitle>
                <CardBody>
                  <CardText>
                    <span className="form-group">
                      <p className="form-row">
                        <span className="col">
                          <label>E-Mail:</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Enter Your E-Mail"
                          />
                        </span>
                      </p>
                    </span>

                    <span className="form-group">
                      <span className="form-row">
                        <span className="col">
                          <label>Passsword :</label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Enter your Password"
                          />
                        </span>
                      </span>
                    </span>

                    <span className="form-row" style={{ marginTop: "4%" }}>
                      <span className="col">
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
                      </span>
                    </span>

                    <span className="form-row" style={{ textAlign: "center",marginTop: "2%" }}>
                    <span className='col'>
                    <Button
                        color="danger"
                        size="sm"
                        onClick={() => this.handleClick()}
                      >
                        {" "}
                        Login{" "}
                      </Button>
                    </span>
                      
                    </span>
                    <hr
                      className="line"
                      style={{ border: "1px dashed grey" }}
                    ></hr>
                    <span style={{ textAlign: "center" }}>
                      <Link className="nav-link" to="/login">
                        Sign in with Google
                      </Link>
                    </span>
                    <span
                      className="circle"
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "60%",
                        backgroundColor: "#bbb",
                        marginLeft: "47%",
                      }}
                    >
                      <span style={{ fontSize: "12px", paddingLeft: "6px" }}>
                        OR
                      </span>
                    </span>
                    <span className='form-row' style={{ marginLeft: "160px" }}>
                      Not yet created an account?
                    </span>
                    <span className='form-row' style={{ textAlign: "center", marginTop: "4%" }}>
                    <span className='col'>
                    <Link
                        to="/signup"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        {" "}
                        <Button type="button" color="danger" size="sm">
                          Sign Up
                        </Button>
                      </Link>
                    </span>
                    </span>
                  </CardText>
                  <br></br>
                  <span style={{ float: "right", fontSize: "12px" }}>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      Forgot password?
                    </Link>
                  </span>
                </CardBody>
              </Card>
            </form>
          </span>
        </Row>
      </Container>
    );
  }
}

export default Login;
