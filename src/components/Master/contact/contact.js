import React, { Component } from 'react'
import './contact.css'
import {Col,Row,Input} from 'reactstrap';
import "@reach/menu-button/styles.css";
import { Modal, Button } from 'react-bootstrap';



class Contact extends Component {
   
 render() {
       
        return (
            <div id="main">
              
                <div id="Contentbox">
                    <h1 className="Contact">CONTACT</h1>
                    <form >
                      <div >
                            <Row>
                                <Col sm={2}>
                                  <label className="commentheading">Subject</label>
                                </Col>
                                <Col className="input" >
                                   <Input type="text" name="" id="name" placeholder="" row="5" style={{width: "370px"}}/>
                               </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col sm={2}>
                                  <label className="commentheading">Message</label>
                                </Col>
                                <Col sm={8}>
                                   <textarea  cols="80" rows="5" placeholder="Write Something..."
                                  className="something">
                                  </textarea>
                              </Col>
                            </Row>
                            <br></br>
                            
                             <Row>
                                   <Col sm={2}>                            
                                      <label id="Sendto">Send To:</label>
                                  </Col>
                                   <Col className="input">
                                      <select >
                                      <option value="Student">Student</option>
                                      <option value="Faculty">Faculty</option>
                                      </select>
                                   </Col>
                             </Row>
                           
                     </div>
                 </form>
                    
                </div>
            </div>
           

        )
    }
    
}
export default Contact;