import React, { Component } from "react";
import {Card,CardTitle,CardText,CardBody,Button,CardHeader,CardFooter} from 'reactstrap';
import MainComponent from "./MainComponent";

import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import Community from './Student/Community/Community';
import Signup from './signup';
import './singlepost.css'

class singlepost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn:true
        }
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    
    onButtonClick() {
        this.setState({
            isLoggedIn: true
        });
        
    }
  
    render() {
               
                return (
                            <body>
                            {/* <img src="https://m.gofisher.net/sites/default/files/social-media-management_0.png" style={{height:'40%',width:'30%',float:'left',marginLeft:'6%',marginTop:'8%'}}></img> */}
                            {/* https://www.pngitem.com/pimgs/m/500-5004833_side-img-people-chatting-on-social-media-hd.png */}

                            <div id="main-box">
                            
                            
                            
                            

                            </div>

                            <div id="comment-section">
                                <hr style={{marginTop:'9%'}}></hr>

                                <div id="circles">
                                    <p id="name">Ajeet Malhotra</p>
                                    <p id="timeofpost">2 mins ago</p>
                                </div>

                                <p style={{marginLeft:'3%',marginTop:'3%'}}>Ajeet Malhotra posted an update regarding the faculty time table.
                                <br></br>The lectures have been extended for another 10 minutes.
                                </p>

                                <hr style={{marginTop:'12%'}}></hr>
                                <span style={{marginLeft:'17%'}}>Like</span>
                                <span style={{marginLeft:'44%'}}>Comment</span>
                                <hr style={{marginTop:'4%'}}></hr>


                                
                            </div>


                            </body>
                      ); 
              
            }
}

export default singlepost;