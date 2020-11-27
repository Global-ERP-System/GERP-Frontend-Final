import React, { Component } from 'react'
import { Modal, Table } from 'react-bootstrap';
import './Account.css'


export default class AccountFaculty extends Component {

    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            FACULTY
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="faculty_Container">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Sno</th>
                                        <th>Name</th>
                                        <th>Post</th>
                                        <th>Salary</th>
                                        <th>Deduction</th>
                                        <th>Total Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>12</td>
                                        <td>50</td>
                                        <td>80</td>
                                        <td>12</td>
                                        <td>50</td>
                                        <td>80</td>
                                    </tr>
                                    <tr>
                                    <td>12</td>
                                        <td>50</td>
                                        <td>80</td>
                                        <td>12</td>
                                        <td>50</td>
                                        <td>80</td>
                                        </tr>

                                </tbody>
                            </Table>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
