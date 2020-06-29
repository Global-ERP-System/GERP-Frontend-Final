import React, { Component } from 'react'
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';
import PieChart from './Pie_Chart'
import './Account.css'
import AccountFaculty from './Account_Faculty'
import AccountHouseKeeping from './Account_HouseKeeping'
import AccountStudent from './Account_Student'


export default class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            faculty: false,
            housekeeping: false,
            student: false
        }
    }
    render() {
        let faculty = () => this.setState({ faculty: false })
        let housekeeping = () => this.setState({ housekeeping: false })
        let student = () => this.setState({ student: false })

        return (
            <div>
                <br></br>
<br></br>
                <h1>Account</h1>
<br></br>
                <div className="container">
                    <div className="Button_Container">
                        <label>Year</label>
                        <DropdownButton as={ButtonGroup} className="Dropdown_button mx-5 my-2" name="Year" id="bg-vertical-dropdown-1" variant="white" >
                            <Dropdown.Item eventKey="1">I</Dropdown.Item>
                            <Dropdown.Item eventKey="2">II</Dropdown.Item>
                        </DropdownButton>
                        <label>Month</label>
                        <DropdownButton as={ButtonGroup} name="Month" className="Dropdown_button mx-3 my-2" id="bg-vertical-dropdown-1" variant="white">
                            <Dropdown.Item eventKey="1">Jan</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Feb</Dropdown.Item>
                        </DropdownButton>
                        <label>Department</label>
                        <DropdownButton as={ButtonGroup} name="Department" className="Dropdown_button mx-3 my-2" id="bg-vertical-dropdown-1" variant="white">
                            <Dropdown.Item eventKey="1">CSE</Dropdown.Item>
                            <Dropdown.Item eventKey="2">IT</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>

                <PieChart />
                
                <div className="Display_Button">
                    <label>Select: </label>
                    <button id="faculty" className="btn btn-success" onClick={() =>
                        this.setState({ faculty: true })}> Faculty</button><br></br>
                    <button id="housekeeping" className="btn btn-success" onClick={() =>
                        this.setState({ housekeeping: true })}> House Keeping</button><br></br>
                    <button id="student" className="btn btn-success" onClick={() =>
                        this.setState({ student: true })}> Student</button><br></br>
                </div>
                <AccountFaculty
                    show={this.state.faculty}
                    onHide={faculty} />
                <AccountHouseKeeping
                    show={this.state.housekeeping}
                    onHide={housekeeping} />
                <AccountStudent
                    show={this.state.student}
                    onHide={student} />
            </div>
        )
    }
}
