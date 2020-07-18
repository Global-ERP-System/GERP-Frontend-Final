import React, { Component } from "react";
import {Card,CardTitle,CardText,CardBody,Button,CardHeader,CardFooter} from 'reactstrap';
import MainComponent from "./MainComponent";

import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import Community from './Student/Community/Community';
import Signup from './signup';

class Allposts extends Component {
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
                                <img src="https://gawvs.in//assets/img/login.png" style={{height:'20%',width:'30%',float:'left',marginLeft:'8%',marginTop:'8%'}}></img>
                                
                                </body>
                      ); 
              
            }
}

export default Allposts;