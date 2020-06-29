import React, { Component } from "react"
import './Student.css'
import {Col,Row,Input} from 'reactstrap';

class Student extends Component {
    
    render() {
        return (
            <div id="Contentbox">
                 <form>
                     <Row>
                      <label>
                      Student Name:
                      <input type="text" name="name" style={{width: "370px"}}/>
                      </label>
                      </Row>
                      <br></br>
                      <Row>                      
                      <label>
                      Roll Number: 
                     <input type="number" name="name"  style={{width: "370px"}}/>
                     </label>
                     </Row>
                     <Row>
                     <input type="submit" value="Submit" />
                     </Row>
                 </form>
            </div>
        );
    }
}

export default Student;
