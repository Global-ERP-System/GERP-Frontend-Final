import React, { Component } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import Create from "./Modal";
import "./Assignment.css";

class Assignment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delete: false,
    };
  }

  toggle() {
    this.setState({ delete: !this.state.delete });
  }
  render() {
    return (
      <div className="assignmentf-page">
        <Card className="assignmentf-card">
          <CardHeader style={{ backgroundColor: "#ff5200" }}>
            <h2 style={{ color: "white", fontWeight: "600" }}>Assignment</h2>
          </CardHeader>
          <CardBody>
            <CardTitle>
              <div className="row">
                <h4 style={{ paddingBottom: "10px", margin: "5px 15px" }}>
                  List of Classes
                </h4>
                <Create />
              </div>
            </CardTitle>

            <div style={{ overflowX: "auto" }}>
              <table className="table1">
                <thead className="thead">
                  <tr className="header">
                    <th>S&nbsp;No.</th>
                    <th>Class</th>
                    <th>Subject</th>
                    <th>Topic</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Computer Science : 8B</td>
                    <td>Data Mining</td>
                    <td>Module1</td>
                    <td>
                      <Button color="success" style={{ width: "180px" }}>
                        View Submissions
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="warning"
                        style={{ width: "80px", color: "white" }}
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="danger"
                        style={{ width: "100px" }}
                        onClick={() => this.toggle()}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Computer Science : 8A</td>
                    <td>Data Mining</td>
                    <td>Module2</td>
                    <td>
                      <Button color="success" style={{ width: "180px" }}>
                        View Submissions
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="warning"
                        style={{ width: "80px", color: "white" }}
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="danger"
                        style={{ width: "100px" }}
                        onClick={() => this.toggle()}
                      >
                        Delete
                      </Button>
                    </td>
                    <Modal isOpen={this.state.delete}>
                      <ModalBody>Are you sure you want to delete?</ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={() => this.toggle()}>
                          Confirm
                        </Button>
                        <Button
                          color="secondary"
                          onClick={() => this.toggle()}
                          toggle={this.state.delete}
                        >
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Computer Science : 6A</td>
                    <td>Data Mining</td>
                    <td>Module3</td>
                    <td>
                      <Button color="success" style={{ width: "180px" }}>
                        View Submissions
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="warning"
                        style={{ width: "80px", color: "white" }}
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="danger"
                        style={{ width: "100px" }}
                        onClick={() => this.toggle()}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Assignment;
