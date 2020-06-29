import React, { Component } from 'react'
import { Modal} from 'react-bootstrap';
import './Account.css'


export default class AccountStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            batch: ""
        }
    }
    handlename = (event) => {
        this.setState({ name: event.target.value });
    }
    handlebatch = (event) => {
        this.setState({ batch: event.target.value });
    }
    handlesubmit = (event) => {
        event.preventDefault();
        this.setState({ name: "" })
        this.setState({ batch: "" })
    }
    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" className="Add_ProjectHeading">
                            Student
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="Student_container">
                                <form onSubmit={this.handlesubmit}>
                                    <label >Name</label>
                                    <input type="text" value={this.state.name} onChange={this.handlename}  />
                                    <label >Batch</label>
                                    <input type="text" value={this.state.batch}
                                        onChange={this.handlebatch}/><br></br>
                                    <input className="btn btn-primary"id="Fetch_Detials" type="submit" value="Fetch Details" />
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
