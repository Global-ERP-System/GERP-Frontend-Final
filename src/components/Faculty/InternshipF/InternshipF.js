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
          <FormGroup>
            <Receive />
          </FormGroup>
          <FormGroup>
            <Button>Computer Science- 8B</Button>
          </FormGroup>
          <FormGroup>
            <Button>Computer Science- 6A</Button>
          </FormGroup>
          <FormGroup>
            <Button>Computer Science- 6B</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default InternshipF;
