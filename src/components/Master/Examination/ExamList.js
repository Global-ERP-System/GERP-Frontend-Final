import React, { Component } from 'react'
import { Modal, Table } from 'react-bootstrap';

export default class RaiseReqModel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            degree: "",
            addexam:false
        }
    }
    handlename = (event) => {
        this.setState({ name: event.target.value });
    }
    handledegree = (event) => {
        this.setState({ degree: event.target.value });
    }
    handleaddexam = (event) => {
        this.setState({ addexam: event.target.value });
    }
    handlesubmit = (event) => {
        event.preventDefault();
        this.setState({ name: "" })
        this.setState({ degree: "" })
        this.setState({ addexam: "" })
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
                            Exam List
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <form onSubmit={this.handlesubmit}>
                                <label className="mx-3 my-3">Name:&nbsp;&nbsp;</label>
                                <input type="text" value={this.state.name} onChange={this.handlename} /><br></br>
                                <label className="mx-3 my-3">Degree:</label>
                                <input type="text" value={this.state.degree} onChange={this.handledegree} />
                                <input className="btn btn-danger mx-3" type="submit" value="Add Exam" />
                            </form>
                        </div>
                    </Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>B-Tech</th>
                                <th>MCA</th>
                                <th>BCA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mid-Term</td>
                                <td>Mid-Term</td>
                                <td>Mid-Term</td>
                            </tr>
                            <tr>
                                <td>Final</td>
                                <td>Final</td>
                                <td>Final</td>
                            </tr>
                    
                        </tbody>
                    </Table>
                </Modal>
            </div>
        )
    }
}
