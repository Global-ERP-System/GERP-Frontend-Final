import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';

export default class RaiseReqModel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topic: "",
            attachment: ""
        }
    }
    handletopic = (event) => {
        this.setState({ topic: event.target.value });
    }
    handleattachment = (event) => {
        this.setState({ attachment: event.target.value });
    }
    handlesubmit = (event) => {
        event.preventDefault();
        this.setState({ topic: "" })
        this.setState({ attachment: "" })
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
                            Add Research Paper
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <form onSubmit={this.handlesubmit}>
                                <label >Topic</label>
                                <input className="form-control" value={this.state.topic} onChange={this.handletopic} /><br></br>
                                <label className="mx-3 my-3">Attachment</label>
                                <input className="form-control" type="file" value={this.state.attachment} onChange={this.handleattachment} /><br></br>
                                <input className="btn btn-success mx-3" type="submit" value="Upload" />
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
