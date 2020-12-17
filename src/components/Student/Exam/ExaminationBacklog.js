import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import './Examination.css';

export default class Examination extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Visibility: " "
        }
    }
    handleVisibilityChange = (event) => {
        this.setState({
            Visibility: event.target.value
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                <h1 style={{ fontFamily: 'Montserrat', fontWeight: '700', textAlign: "center" }}>Examination</h1>
                <div className='table-container'>
                    <Table striped bordered hover className='table-main'>
                        <thead>
                        <tr>
                        <th colSpan='3'>Backlogs</th>
                        </tr>
                        <tr>
                            <th>
                                <select>
                                    <option>Semester</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </th>
                            <th>Subject</th>
                            <th>Backlogs</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>DBMS</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>DBMS</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>DBMS</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>DBMS</td>
                            <td>No</td>
                        </tr>
                        </tbody>
                    </Table>
                    <Table striped bordered hover className='table-main'>
                        <thead>
                        <tr>
                        <th colSpan='3'>Grading</th>
                        </tr>
                        <tr>
                            <th>
                                <select>
                                    <option>Semester</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </th>
                            <th>Subject</th>
                            <th>Backlogs</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>DBMS</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>DBMS</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>DBMS</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>DBMS</td>
                            <td>No</td>
                        </tr>
                        </tbody>
                    </Table>
                    <Table striped bordered hover className='table-main'>
                        <thead>
                        <tr>
                        <th colSpan='3'>Upcoming Exam</th>
                        </tr>
                        <tr>
                            <th>
                                <select>
                                    <option>Semester</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </th>
                            <th>Subject</th>
                            <th>Backlogs</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>DBMS</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>DBMS</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>DBMS</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>DBMS</td>
                            <td>No</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                
            </div>
        )
    }
}
