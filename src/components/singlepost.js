import React, { Component } from "react";
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
                            <div id="main-box">
                            
                            <img alt='' src="https://cdn.vertex42.com/ExcelTemplates/Images/college-class-schedule-template.png" style={{margin:'3% 2%',height:'520px',width:'95%'}}></img>
                            
                            

                            </div>

                            <div id="comment-section">
                                <hr style={{marginTop:'9%'}}></hr>

                                <div id="circles">
                                    <img alt='' id="user-pic" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"></img>
                                    <p id="name">Ajeet Malhotra</p>
                                    <p id="timeofpost">2 mins ago</p>
                                </div>

                                <p style={{marginLeft:'3%',marginTop:'3%'}}>Ajeet Malhotra posted an update regarding the faculty time table.
                                <br></br>The lectures have been extended for another 10 minutes.
                                </p>

                                <hr style={{marginTop:'12%'}}></hr>
                                <img alt='' src="https://www.freeiconspng.com/uploads/like-icon-0.png" style={{height:'3%',width:'2%',position:'absolute',marginLeft:'3%',marginTop:'3px'}}></img>
                                <img alt='' src="https://img.pngio.com/comment-comments-description-note-notice-icon-comment-icon-png-512_512.png" style={{height:'3%',width:'2%',position:'absolute',marginLeft:'19%',marginTop:'3px'}}></img>
                                <span style={{marginLeft:'17%'}}>Like</span>
                                <span style={{marginLeft:'44%'}}>Comment</span>
                                <hr style={{marginTop:'4%'}}></hr>


                                
                            </div>


                            </body>
                      ); 
              
            }
}

export default singlepost;