import React, { Component } from "react";
import {Card,CardTitle,CardText,CardBody,CardHeader,CardFooter} from 'reactstrap';
import "./assignment.css";

class Assignment extends Component {
    render() {
        return (
            <div classsName="container"style={{marginLeft:'20%',marginRight:'20%', marginBottom:'5%'}}>
        {/*    <div className="assignment" style={{marginLeft:'20%',marginRight:'20%', marginBottom:'5%',height:'100%'}}> */}
                <form>
                    <Card>
                        <CardTitle><h2 className="text-center">ASSIGNMENTS</h2></CardTitle>
                        <CardBody>
                            <CardText>
                                <div className="form-group">
                                    <div class="form-row">
                                      <div class="col">
                                        <label>Name :</label>
                                        <input class="form-control" placeholder="Enter Your Name" />
                                      </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div class="form-row">
                                        <div class="col">
                                            <label>Enrollment Number :</label>
                                           <input class="form-control" placeholder="Enter your Enrollment Number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div class="form-row">
                                        <div class="col">
                                            <label>Subject Code :</label>
                                           <input type="number" class="form-control" placeholder="Enter the subject code" />
                                         </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                     <div class="form-row">
                                        <div class="col">
                                            <label>Branch :</label>
                                           <input type="number" class="form-control" placeholder="Enter your branch" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div class="form-row">
                                        <div class="col">
                                            <label>Semester :</label>
                                           <input type="number" class="form-control" placeholder="Enter semester" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div class="form-row">
                                        <div class="col">
                                            <label>Select file :</label>
                                            <div style={{textAlign:'center'}}>
                                                <div className="form-group" style={{display:'inline'}}>                 
                                                    <input type="file" className="form-control" placeholder="Upload Assignment" />
                                                    <div style={{textAlign:"center"}}>or</div>
                                                    <input type="link" className="form-control" placeholder="Add Link"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div style={{textAlign:"center"}}>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </CardText> 
                        </CardBody>   
                    </Card>
                </form>
            </div>
        );
    }
}

export default Assignment;