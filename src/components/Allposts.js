import React, { Component } from "react";
import {Card,CardTitle,CardText,CardBody,Button,CardHeader,CardFooter} from 'reactstrap';
import MainComponent from "./MainComponent";

import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import Community from './Student/Community/Community';
import Signup from './signup';
import './Allposts.css'

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
                            <img src="https://m.gofisher.net/sites/default/files/social-media-management_0.png" style={{height:'40%',width:'30%',float:'left',marginLeft:'6%',marginTop:'8%'}}></img>
                            {/* https://www.pngitem.com/pimgs/m/500-5004833_side-img-people-chatting-on-social-media-hd.png */}

                            <div id="main-box" style={{marginLeft:'47%',width:'35%',height:'530px'}}>
                            <br></br>
                            <div id="posts_all">
                                <div id="circle-notify">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" style={{height:'60px',width:'60px',borderRadius:'120px'}}></img>
                                <p style={{width:'400px',height:'70px',marginLeft:'130%',marginTop:'-93%'}}>
                                    <Link to='/singlepost'>Ajeet posted an update</Link>
                                    <p>10 minutes ago</p>
                                </p>
                                </div>
                            </div>

                            <div id="posts_all" style={{marginTop:'2%'}}>
                                <div id="circle-notify">
                                <img src="https://img1.nickiswift.com/img/gallery/the-untold-truth-of-mark-zuckerbergs-wife-priscilla-chan/intro-1583268905.jpg" style={{height:'60px',width:'60px',borderRadius:'120px'}}></img>
                                <p style={{width:'400px',height:'70px',marginLeft:'130%',marginTop:'-93%'}}>
                                    <Link to='/singlepost'>Renu changed her profile</Link>
                                    <p>An hour ago</p>
                                </p>
                                </div>
                            </div>

                            <div id="posts_all" style={{marginTop:'2%'}}>
                                <div id="circle-notify">
                                <img src="https://www.manifoldkerala.com/wp-content/uploads/2018/06/buk4.jpg" style={{height:'60px',width:'60px',borderRadius:'120px'}}></img>
                                <p style={{width:'400px',height:'70px',marginLeft:'130%',marginTop:'-93%'}}>
                                    <Link to='/singlepost'>New study material added</Link>
                                    <p>10 minutes ago</p>
                                </p>
                                </div>
                            </div>

                            <div id="posts_all" style={{marginTop:'2%'}}>
                                <div id="circle-notify">
                                <img src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0.jpg" style={{height:'60px',width:'60px',borderRadius:'120px'}}></img>
                                <p style={{width:'400px',height:'70px',marginLeft:'130%',marginTop:'-93%'}}>
                                    <Link to='/singlepost'>Sudipto published his research paper</Link>
                                    <p>10 minutes ago</p>
                                </p>
                                </div>
                            </div>

                            </div>

                            {/* <p>hello</p> */}
                            </body>
                      ); 
              
            }
}

export default Allposts;