import React, { Component } from 'react'
import { Modal, Table } from 'react-bootstrap';
import './Examination_Details.css'


export default class RaiseReqModel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grade: "",
            frompercentage: "",
            topercentage: ""
        }
    }
    handlefrompercentage = (event) => {
        this.setState({ frompercentage: event.target.value });
    }
    handlegrade = (event) => {
        this.setState({ grade: event.target.value });
    }
    handletopercentage = (event) => {
        this.setState({ topercentage: event.target.value });
    }
    handlesubmit = (event) => {
        event.preventDefault();
        this.setState({ grade: "" })
        this.setState({ frompercentage: "" })
        this.setState({ topercentage: "" })
    }
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
                            Grade List
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="grade_container">
                            <form onSubmit={this.handlesubmit}>
                                <label className="mx-3 my-3">Grade</label>
                                <input type="text" value={this.state.grade}
                                    onChange={this.handlegrade} />
                                <label className="mx-3 my-3">From %</label>
                                <input type="text" value={this.state.frompercentage} onChange={this.handlefrompercentage} />
                                <label className="mx-3 my-3">To %</label>
                                <input type="text" value={this.state.topercentage} onChange={this.handletopercentage} />
                                <input className="btn btn-danger" id="Addgrade" type="submit" value="Add Grade" />
                            </form>
                        </div>
                    </Modal.Body>
                    <h2 className="mt-1 Heading">Grade List</h2>
                    <div className="Examgrade_Container">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Grade Name</th>
                                        <th>From %</th>
                                        <th>To %</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>12</td>
                                        <td>50</td>
                                        <td>80</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>20</td>
                                        <td>30</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </div>
                </Modal>
            </div>
        )
    }
}
