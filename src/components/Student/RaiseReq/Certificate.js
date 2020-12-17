import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
import MainModal from '../../Alert-Modal/submit-modal';

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
                        <div className="container-md">
                            <form onSubmit={this.handlesubmit} style={{textAlign: 'center'}}>
                                <label className="mx-3 my-3">Name of Certificate</label>
                                <input style={{width: 'auto'}} type="text" value={this.state.certificateName}
                                    onChange={this.handlename} /><br></br>
                                <MainModal/>
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
