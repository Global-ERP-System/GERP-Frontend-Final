import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
import MainModal from '../../Alert-Modal/submit-modal';

export default class RaiseReqModel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fromdate: "",
            todate: "",
            leave: ""
        }
    }
    handlefromdate = (event) => {
        this.setState({ fromdate: event.target.value });
    }
    handletodate = (event) => {
        this.setState({ todate: event.target.value });
    }
    handleleave = (event) => {
        this.setState({ leave: event.target.value });
    }
    handlesubmit = (event) => {
        event.preventDefault();
        this.setState({ fromdate: "" })
        this.setState({ todate: "" })
        this.setState({ leave: "" })
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
                            Leave Application Request
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container-md" style={{textAlign: 'center'}}>
                            <form onSubmit={this.handlesubmit}>
                                <label className="mx-3 my-3">From Date</label>
                                <input type="date" value={this.state.fromdate} onChange={this.handlefromdate} /><br></br>
                                <label className="mx-3 my-3">To Date</label>
                                <input type="date" value={this.state.todate} onChange={this.handletodate} /><br></br>
                                <label className="mx-3 my-3">Reason of Leave</label>
                                <input style={{width: 'auto'}} type="text" value={this.state.leave}
                                    onChange={this.handleleave} /><br></br>
                                <MainModal />
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
