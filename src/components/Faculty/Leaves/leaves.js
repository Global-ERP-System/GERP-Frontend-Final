import React, { Component } from 'react'
import { Table, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import './leaves.css'

class leaves extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: true
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    render() {
        return (
            <React.Fragment>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'/>
            <div class="row">
            <div class="col">
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
            </div>
            <div class="col">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret id="yeardropdown">
                Year
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>2017</DropdownItem>
                <DropdownItem>2018</DropdownItem>
                <DropdownItem>2019</DropdownItem>
            </DropdownMenu>
            </Dropdown>
            </div>
            </div><br />
            <div>
                <h1 id="heading">Past leaves record</h1>
            </div>

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
                    <td scope="row">20/10/2018</td>
                    <td>4</td>
                    <td>Family Function</td>
                    <td>Granted</td>
                </tr>
                <tr>
                    <td scope="row">3/3/2019</td>
                    <td>3</td>
                    <td>Sick Leave</td>
                    <td>Granted</td>
                </tr>
                <tr>
                    <td scope="row">19/6/2019</td>
                    <td>2</td>
                    <td>Paper Presentation Conference</td>
                    <td>Granted</td>
                </tr>
            </tbody>
            </Table>
            <Button color="primary" size="lg" id="buttonforleave">Apply for Leave</Button>
            </React.Fragment>

        )
    }
}
export default leaves
