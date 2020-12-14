import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';

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
                            <form onSubmit={this.handlesubmit} style={{padding: '30px'}}>
                                <label className="mx-3 my-3">From Date</label>
                                <input type="date" value={this.state.fromdate} onChange={this.handlefromdate} /><br></br>
                                <label className="mx-3 my-3">To Date</label>
                                <input type="date" value={this.state.todate} onChange={this.handletodate} /><br></br>
                                <label className="mx-3 my-3">Reason of Leave</label>
                                <input type="text" value={this.state.leave}
                                    onChange={this.handleleave} /><br></br>
                                <input className="btn btn-success my-3" type="submit" value="Submit" style={{width:'50%'}} />
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
