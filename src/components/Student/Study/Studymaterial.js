import React, { Component } from 'react'
import './Studymaterial.css'
import { DropdownButton,ButtonGroup, Dropdown} from 'react-bootstrap';

export default class Studymaterial extends Component {
    render() {
        return (
            <div style={{marginBottom:'30%', marginLeft:'15%', marginTop:'10%'}}>
                <h1 className="Heading">Study Material</h1>
                <div className="Header_Details">
                    <h4>Subject</h4>
                    <h4>Teacher</h4>
                    <h4>File</h4>
                </div>
                <div className="Containt_Details">
                    <h5>&lt;Subject_Name&gt;</h5>
                    <h5>&lt;Teacher_Name&gt;</h5>
                    <DropdownButton as={ButtonGroup} title="See Details" id="bg-vertical-dropdown-1" style={{width:'15%'}} variant="danger" className="my-1">
                        <Dropdown.Item eventKey="1">Subject Details</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Subject Details</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
        )
    }
}
