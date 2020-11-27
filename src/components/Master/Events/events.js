import React, { Component } from 'react'
import './events.css'
import {Col,Row,Input} from 'reactstrap';
import "@reach/menu-button/styles.css";




class Events extends Component {
   
 render() {
       
        return (
            <div id="main">
              
                <div id="Contentbox">
                    <h1 className="Contact">Events</h1>
                    <form >
                      <div >
                            <Row>
                                <Col sm={3}>
                                  <label className="commentheading">Event Date and time</label>
                                </Col>
                                <Col className="input" >
                                   <Input type="Date time" name="" id="name" placeholder="" row="5" style={{width: "370px"}}/>
                               </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col sm={3}> 
                                  <label className="commentheading">Event Name</label>
                                </Col>
                                <Col className="input" >
                                   <Input type="text" name="" id="name" placeholder="" row="5" style={{width: "370px"}}/>
                               </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col sm={3}>
                                  <label className="commentheading">Guest/Specialist</label>
                                </Col>
                                <Col className="input" >
                                   <Input type="text" name="" id="name" placeholder="" row="5" style={{width: "370px"}}/>
                               </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col sm={3}>
                                  <label className="commentheading">Organised By</label>
                                </Col>
                                <Col className="input" >
                                   <Input type="text" name="" id="name" placeholder="" row="5" style={{width: "370px"}}/>
                               </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                  <label className="commentheading">Description</label>
                                </Col>
                                <Col sm={8}>
                                   <textarea  cols="80" rows="5" placeholder=""
                                  className="something">
                                  </textarea>
                              </Col>
                            </Row>
                            <br></br>
                            <div style={{textAlign:"center"}}>
                            <button style={{color:"white",backgroundColor:'blue'}} type="submit" className="btn">Submit</button>
                            </div>
                           
                     </div>
                 </form>
                    
                </div>
            </div>
           

        )
    }
    
}
export default Events;