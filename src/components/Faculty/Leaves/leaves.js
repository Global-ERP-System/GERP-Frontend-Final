import React, { Component } from "react";
import {
  Table,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
} from "reactstrap";
import "./leaves.css";

class leaves extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  render() {
    return (
      <React.Fragment>
        <div className="leavebody">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Col sm={7}>
              <Table striped bordered hover id="table1">
                <thead>
                  <tr>
                    <th>Total leaves allowed</th>
                    <th>Leaves taken</th>
                    <th>Leaves left</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20</td>
                    <td>10</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col>
              <center>
                <Dropdown
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggle}
                  className="yeardropdown"
                >
                  <DropdownToggle caret style={{ backgroundColor: "#138808" }}>
                    Year
                  </DropdownToggle>
                  <DropdownMenu className="DropdownMenuitem">
                    <DropdownItem>2017</DropdownItem>
                    <DropdownItem>2018</DropdownItem>
                    <DropdownItem>2019</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </center>
            </Col>
          </div>

          <div>
            <h1 id="heading">Past leaves record</h1>
          </div>

          <div style={{ overflow: "auto" }}>
            <Table striped bordered hover id="table2">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>No. of days</th>
                  <th>Reason</th>
                  <th>Granted/denied</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20/10/2018</td>
                  <td>4</td>
                  <td>Family Function</td>
                  <td>Granted</td>
                </tr>
                <tr>
                  <td>3/3/2019</td>
                  <td>3</td>
                  <td>Sick Leave</td>
                  <td>Granted</td>
                </tr>
                <tr>
                  <td>19/6/2019</td>
                  <td>2</td>
                  <td>Paper Presentation Conference</td>
                  <td>Granted</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <button
            style={{ color: "white", backgroundColor: "#138808" }}
            id="buttonforleave"
            type="submit"
            className="btn"
          >
            Apply for Leave
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default leaves;
