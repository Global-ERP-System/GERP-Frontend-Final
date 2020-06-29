import React, { Component } from "react";
import {Form,FormGroup,CustomInput,Label,Row,Col,Input,Button} from 'reactstrap';
import './intern.css'

class Intern extends Component {
    render() {
        return (
        <div style={{marginLeft:'20%',marginRight:'20%'}}>
            <div className="heading">
                <h1>INTERNSHIPS</h1>
            </div>
            <Form>
                <Row form>
                    <Col sm={6}>
                    <legend className="col-form-label">Currently Available :</legend>
                    </Col>
                    <Col sm={3}>
                        <FormGroup check inline>
                            <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            Yes
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup check inline>
                            <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            No
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="preferences">Preferences :</Label><br/>
                    <input className="form-control" id="preferences" placeholder="Preferences"/>
                </FormGroup>
                <FormGroup>
                    <Label for="skills">Skills :</Label><br/>
                    <input className="form-control"  id="skills" placeholder="List of skills"/>
                </FormGroup>
                <FormGroup>
                    <Label for="upload">CV Upload :</Label>
                    <CustomInput type="file" id="upload" name="upload" />
                </FormGroup>
                <h5><b>Fill the details about current internship:</b></h5>
                <FormGroup>
                    <Label for="name">Name of the Company :</Label><br/>
                    <input className="form-control" id="name" placeholder="Enter company name..."/>
                </FormGroup>
                <FormGroup>
                    <Label for="position">Position :</Label><br/>
                    <input className="form-control" id="position" placeholder="Enter the position you worked for..."/>
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="date">Start Date</Label>
                            <Input type="date" name="date" id="startdate" placeholder="date placeholder"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="date">End Date</Label>
                            <Input type="date" name="date" id="enddate" placeholder="date placeholder"/>
                        </FormGroup>
                    </Col>
                </Row>
                <div style={{textAlign:'center'}}>
                <FormGroup style={{display:'inline-block',alignSelf:'center'}}>
                    <Button  style={{backgroundColor:'blue'}} >Upload Docs</Button>
                    &nbsp;&nbsp;&nbsp;               
                    <Button  style={{backgroundColor:'blue'}} >Submit</Button>
                </FormGroup>
                </div>

            </Form>
        </div>
        );
    }
}

export default Intern;


