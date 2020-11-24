import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';

export default class Certificate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            certificateName: ""
        }
    }
    handlename = (event) => {
        this.setState({ certificateName: event.target.value });
    }
    handlesubmit = (event) => {
        event.preventDefault();
        this.setState({ certificateName: "" })
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
                            Certificate
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <form onSubmit={this.handlesubmit}>
                                <label className="mx-3 my-3">Name of Certificate</label>
                                <input type="text" value={this.state.certificateName}
                                    onChange={this.handlename} /><br></br>
                                <input className="btn btn-success mx-3" type="submit" value="Submit" style={{width:'50%'}}/>
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
