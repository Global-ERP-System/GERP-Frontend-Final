import React, { Component } from "react";
import { Button, Form, FormGroup } from "reactstrap";
import Receive from "./Receive";
import "./InternshipF.css";

class InternshipF extends Component {
  render() {
    return (
      <div className="Internship">
        <Form className="internf">
          <h1>Internship Details</h1>
          <br />
          <div>
            <FormGroup style={{ textAlign: "center" }}>
              <Receive />
            </FormGroup>
            <FormGroup style={{ textAlign: "center" }}>
              <Button>Computer Science- 8B</Button>
            </FormGroup>
            <FormGroup style={{ textAlign: "center" }}>
              <Button>Computer Science- 6A</Button>
            </FormGroup>
            <FormGroup style={{ textAlign: "center" }}>
              <Button>Computer Science- 6B</Button>
            </FormGroup>
          </div>
        </Form>
      </div>
    );
  }
}

export default InternshipF;
