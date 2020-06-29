import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';

export default class Report extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reportName: ""
        }
    }
    handlename = (event) => {
        this.setState({ reportName: event.target.value });
    }
    handlesubmit = (event) => {
        event.preventDefault();
        this.setState({ reportName: "" })
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
                            Report
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <form onSubmit={this.handlesubmit}>
                                <label className="mx-3 my-3">Name of Report</label>
                                <input type="text" value={this.state.reportName}
                                    onChange={this.handlename} /><br></br>
                                <input className="btn btn-success mx-3" type="submit" value="Submit" />
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
