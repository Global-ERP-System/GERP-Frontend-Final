import React, { Component } from 'react'
import './Community.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHome, faUser, faBook, faBuilding, faSearch, faComment, faCalendar, faCalendarCheck  } from "@fortawesome/free-solid-svg-icons";
//import "@reach/menu-button/styles.css";
import {Container} from 'reactstrap';
import Create from './Modal'
import Create1 from './Modal1'


class Community extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Comment: '',
            Visibility: ''
        }
    }
    handlePostChange = (event) => {
        this.setState({
            Comment: event.target.value
        })
    }
    handleVisibilityChange = (event) => {
        this.setState({
            Visibility: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.Comment} ${this.state.Visibility}`)
    }

    render() {
        return (
            <div id="main">
                <div id="SideNavBar" style={{width:'18%'}}>
                        
                            <h5 id='notify'>Notifications</h5>

                            
                            <ul id="notify-points">
                                <marquee direction='up' scrollamount='3'>
                                <li><a href="" style={{textDecoration:'none'}}>Attendance</a></li><br></br>
                                <li><a href="" style={{textDecoration:'none'}}>Attendance</a></li><br></br>
                                <li><a href="" style={{textDecoration:'none'}}>Attendance</a></li><br></br>
                                <li><a href="" style={{textDecoration:'none'}}>Attendance</a></li><br></br>
                                <li><a href="" style={{textDecoration:'none'}}>Attendance</a></li><br></br>
                                </marquee>
                            </ul>
                            
                </div>

                <div id="SideNavBar" style={{width:'18%',marginTop:'18%'}}>
                <img src="https://dcassetcdn.com/design_img/3361176/175408/175408_18909504_3361176_2e474988_image.png" style={{height:'90%',width:'80%',marginTop:'5%'}}></img>
                </div>

                <div id="Contentbox"style={{height:'316px',marginRight:'-135px',marginTop:'-60px', marginLeft:'20%'}}>
                    <h3 className="Community"style={{fontSize:'28px',padding:'2px'}}>Community Forum</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div  >
                            <label className="commentheading">Write a Post</label>
                            <textarea value={this.state.Comment}
                                onChange={this.handlePostChange} cols="80" rows="5" placeholder="Write Something..."
                                className="something"></textarea></div>
                        <div>
                            <button id="Tags">Tag</button>
                            <img src="https://cdn2.iconfinder.com/data/icons/rounded-white-basic-ui-set-3/139/Photo_Add-RoundedWhite-512.png" style={{marginLeft:'10%',marginTop:'-4%',height:'4%',width:'4%'}}></img>
                            <div style={{width:'23%',marginLeft:'9%',marginTop:'-33px',position:'absolute'}}>
                            <input style={{border:'0px'}} type="file"/>
                            </div>
                        </div>
                        <br></br>
                        <div>
                            <label id="Visibility1"style={{marginTop:'-1%',marginLeft:'2%'}}>Visibility:</label>
                            <select value={this.state.visibility} onChange={this.handleVisibilityChange} id="Visibility2" style={{marginTop:'-1%', padding:'0px'}}>
                                <option value="Public">Public </option>
                                <option value="ClassMate">Classmates</option>
                                <option value="SubOrdinates">Subordinates</option>
                            </select>
                        </div>
                        <div>
                            <button id="Post">Post</button>
                        </div>
                    </form>
                    <div id="newRecent" >
                        <h5 className="recentheading">Recent posts</h5>
                        
                        <div style={{height:'50px',width:'50px',borderRadius:'100px',margin:'2% 3%'}}>
                            <img src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg" style={{height:'50px',width:'50px',borderRadius:'100px'}}></img>

                        <div id="designation"><b>Abhimanyu Singh</b>
                        <p style={{width:'120%',marginLeft:'13%'}}>HR Consultant at Dabur Industries<br></br>
                        <span style={{marginLeft:'-79%',color:'green'}}>10h</span>
                        </p> 
                        
                        </div>

                        </div>

                        <div id="post-content">
                            
                            <p id="main-content-matter">Did you hear that buzzing sound?<br></br>That's for you to set the alarm for the
                            Codsule, which is taking place tomorrow from 8:00 PM - 11:00 PM.
                            <br></br>
                            Register for the Contest at <a href="https://cb.lk/codjulyli">https://cb.lk/codjulyli</a>
                            </p>

                            <p id="main-content-matter" style={{color:'#3498DB',fontWeight:'bold'}}>#Codsule #CodingChallenge #Nagarro #Coding #Programming</p>

                            <img src="https://pbs.twimg.com/media/EckJ0_RWkAMuu4D.jpg" style={{width:'86%',height:'53%'}}></img>
                            {/* <span style={{marginLeft:'-78%',fontSize:'20px'}}>10</span>
                            <img src="https://www.freeiconspng.com/uploads/like-flat-icon-png-25.png" style={{height:'5%',width:'3%',marginLeft:'6%',marginTop:'-3%'}}></img> */}
                            
                            <br></br>
                            <hr style={{width:'95%',marginTop:'1%'}}></hr>

                            <img src="https://www.freeiconspng.com/uploads/like-icon-0.png" style={{height:'4%',width:'3%',float:'left',margin:'-1% 10%'}}></img>
                            

                            <img src="https://img.pngio.com/comment-comments-description-note-notice-icon-comment-icon-png-512_512.png" style={{height:'4%',width:'3%',float:'left',margin:'-1% 11%'}}></img>

                            <img src="https://cdn0.iconfinder.com/data/icons/cute-mono-style-line/44/iconShare-512.png" style={{height:'4%',width:'3%',float:'left',margin:'-1% 11%'}}></img>

                            <img src="https://www.clipartmax.com/png/middle/268-2687667_inclined-paper-plane-free-icon-paper-plane-telegram-logo.png" style={{height:'4%',width:'4%',float:'left',margin:'-1% 10%'}}></img>                            

                            <span style={{fontSize:'10px',float:'left',margin:'1% 8%'}}><a href="#" style={{textDecoration:'none'}}>Acknowledge</a></span>
                            <span style={{fontSize:'10px',float:'left',margin:'1% 11%'}}><a href="#" style={{textDecoration:'none'}}>Express</a></span>
                            <span style={{fontSize:'10px',float:'left',margin:'1% 10%'}}><a href="#" style={{textDecoration:'none'}}>Share</a></span>
                            <span style={{fontSize:'10px',float:'left',margin:'1% 12%'}}><a href="#" style={{textDecoration:'none'}}>Send</a></span>

                            <hr style={{width:'95%',marginTop:'6%'}}></hr>
                        
                        </div>

                        <br></br>

                        <div style={{height:'50px',width:'50px',borderRadius:'100px',margin:'2% 3%'}}>
                            <img src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg" style={{height:'50px',width:'50px',borderRadius:'100px'}}></img>

                        <div id="designation"><b>Abhimanyu Singh</b>
                        <p style={{width:'120%',marginLeft:'13%'}}>HR Consultant at Dabur Industries<br></br>
                        <span style={{marginLeft:'-79%',color:'green'}}>10h</span>
                        </p> 
                        
                        </div>

                        </div>

                        <div id="post-content">
                            
                            <p id="main-content-matter">Did you hear that buzzing sound?<br></br>That's for you to set the alarm for the
                            Codsule, which is taking place tomorrow from 8:00 PM - 11:00 PM.
                            <br></br>
                            Register for the Contest at <a href="https://cb.lk/codjulyli">https://cb.lk/codjulyli</a>
                            </p>

                            <p id="main-content-matter" style={{color:'#3498DB',fontWeight:'bold'}}>#Codsule #CodingChallenge #Nagarro #Coding #Programming</p>

                            <img src="https://pbs.twimg.com/media/EckJ0_RWkAMuu4D.jpg" style={{width:'86%',height:'53%'}}></img>
                            {/* <span style={{marginLeft:'-78%',fontSize:'20px'}}>10</span>
                            <img src="https://www.freeiconspng.com/uploads/like-flat-icon-png-25.png" style={{height:'5%',width:'3%',marginLeft:'6%',marginTop:'-3%'}}></img> */}
                            
                            <br></br>
                            <hr style={{width:'95%',marginTop:'1%'}}></hr>

                            <img src="https://www.freeiconspng.com/uploads/like-icon-0.png" style={{height:'4%',width:'3%',float:'left',margin:'-1% 10%'}}></img>
                            

                            <img src="https://img.pngio.com/comment-comments-description-note-notice-icon-comment-icon-png-512_512.png" style={{height:'4%',width:'3%',float:'left',margin:'-1% 11%'}}></img>

                            <img src="https://cdn0.iconfinder.com/data/icons/cute-mono-style-line/44/iconShare-512.png" style={{height:'4%',width:'3%',float:'left',margin:'-1% 11%'}}></img>

                            <img src="https://www.clipartmax.com/png/middle/268-2687667_inclined-paper-plane-free-icon-paper-plane-telegram-logo.png" style={{height:'4%',width:'4%',float:'left',margin:'-1% 10%'}}></img>                            

                            <span style={{fontSize:'10px',float:'left',margin:'1% 8%'}}><a href="#" style={{textDecoration:'none'}}>Acknowledge</a></span>
                            <span style={{fontSize:'10px',float:'left',margin:'1% 11%'}}><a href="#" style={{textDecoration:'none'}}>Express</a></span>
                            <span style={{fontSize:'10px',float:'left',margin:'1% 10%'}}><a href="#" style={{textDecoration:'none'}}>Share</a></span>
                            <span style={{fontSize:'10px',float:'left',margin:'1% 12%'}}><a href="#" style={{textDecoration:'none'}}>Send</a></span>

                            <hr style={{width:'95%',marginTop:'6%'}}></hr>
                        
                        </div>

                        <br></br>

                        <div style={{height:'50px',width:'50px',borderRadius:'100px',margin:'2% 3%'}}>
                            <img src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg" style={{height:'50px',width:'50px',borderRadius:'100px'}}></img>

                        <div id="designation"><b>Abhimanyu Singh</b>
                        <p style={{width:'120%',marginLeft:'13%'}}>HR Consultant at Dabur Industries<br></br>
                        <span style={{marginLeft:'-79%',color:'green'}}>10h</span>
                        </p> 
                        
                        </div>

                        </div>

                        <div id="post-content">
                            
                            <p id="main-content-matter">Did you hear that buzzing sound?<br></br>That's for you to set the alarm for the
                            Codsule, which is taking place tomorrow from 8:00 PM - 11:00 PM.
                            <br></br>
                            Register for the Contest at <a href="https://cb.lk/codjulyli">https://cb.lk/codjulyli</a>
                            </p>

                            <p id="main-content-matter" style={{color:'#3498DB',fontWeight:'bold'}}>#Codsule #CodingChallenge #Nagarro #Coding #Programming</p>

                            <img src="https://pbs.twimg.com/media/EckJ0_RWkAMuu4D.jpg" style={{width:'86%',height:'53%'}}></img>
                            {/* <span style={{marginLeft:'-78%',fontSize:'20px'}}>10</span>
                            <img src="https://www.freeiconspng.com/uploads/like-flat-icon-png-25.png" style={{height:'5%',width:'3%',marginLeft:'6%',marginTop:'-3%'}}></img> */}
                            
                            <br></br>
                            <hr style={{width:'95%',marginTop:'1%'}}></hr>

                            <img src="https://www.freeiconspng.com/uploads/like-icon-0.png" style={{height:'4%',width:'3%',float:'left',margin:'-1% 10%'}}></img>
                            

                            <img src="https://img.pngio.com/comment-comments-description-note-notice-icon-comment-icon-png-512_512.png" style={{height:'4%',width:'3%',float:'left',margin:'-1% 11%'}}></img>

                            <img src="https://cdn0.iconfinder.com/data/icons/cute-mono-style-line/44/iconShare-512.png" style={{height:'4%',width:'3%',float:'left',margin:'-1% 11%'}}></img>

                            <img src="https://www.clipartmax.com/png/middle/268-2687667_inclined-paper-plane-free-icon-paper-plane-telegram-logo.png" style={{height:'4%',width:'4%',float:'left',margin:'-1% 10%'}}></img>                            

                            <span style={{fontSize:'10px',float:'left',margin:'1% 8%'}}><a href="#" style={{textDecoration:'none'}}>Acknowledge</a></span>
                            <span style={{fontSize:'10px',float:'left',margin:'1% 11%'}}><a href="#" style={{textDecoration:'none'}}>Express</a></span>
                            <span style={{fontSize:'10px',float:'left',margin:'1% 10%'}}><a href="#" style={{textDecoration:'none'}}>Share</a></span>
                            <span style={{fontSize:'10px',float:'left',margin:'1% 12%'}}><a href="#" style={{textDecoration:'none'}}>Send</a></span>

                            <hr style={{width:'95%',marginTop:'6%'}}></hr>
                        
                        </div>

                        <br></br>

                        <div style={{height:'50px',width:'50px',borderRadius:'100px',margin:'2% 3%'}}>
                            <img src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg" style={{height:'50px',width:'50px',borderRadius:'100px'}}></img>

                        <div id="designation"><b>Abhimanyu Singh</b>
                        <p style={{width:'120%',marginLeft:'13%'}}>HR Consultant at Dabur Industries<br></br>
                        <span style={{marginLeft:'-79%',color:'green'}}>10h</span>
                        </p> 
                        
                        </div>

                        </div>

                        <div id="post-content">
                            
                            <p id="main-content-matter">Did you hear that buzzing sound?<br></br>That's for you to set the alarm for the
                            Codsule, which is taking place tomorrow from 8:00 PM - 11:00 PM.
                            <br></br>
                            Register for the Contest at <a href="https://cb.lk/codjulyli">https://cb.lk/codjulyli</a>
                            </p>

                            <p id="main-content-matter" style={{color:'#3498DB',fontWeight:'bold'}}>#Codsule #CodingChallenge #Nagarro #Coding #Programming</p>

                            <img src="https://pbs.twimg.com/media/EckJ0_RWkAMuu4D.jpg" style={{width:'86%',height:'53%'}}></img>
                            {/* <span style={{marginLeft:'-78%',fontSize:'20px'}}>10</span>
                            <img src="https://www.freeiconspng.com/uploads/like-flat-icon-png-25.png" style={{height:'5%',width:'3%',marginLeft:'6%',marginTop:'-3%'}}></img> */}
                            
                            <br></br>
                            <hr style={{width:'95%',marginTop:'1%'}}></hr>

                            <img src="https://www.freeiconspng.com/uploads/like-icon-0.png" style={{height:'4%',width:'3%',float:'left',margin:'-1% 10%'}}></img>
                            

                            <img src="https://img.pngio.com/comment-comments-description-note-notice-icon-comment-icon-png-512_512.png" style={{height:'4%',width:'3%',float:'left',margin:'-1% 11%'}}></img>

                            <img src="https://cdn0.iconfinder.com/data/icons/cute-mono-style-line/44/iconShare-512.png" style={{height:'4%',width:'3%',float:'left',margin:'-1% 11%'}}></img>

                            <img src="https://www.clipartmax.com/png/middle/268-2687667_inclined-paper-plane-free-icon-paper-plane-telegram-logo.png" style={{height:'4%',width:'4%',float:'left',margin:'-1% 10%'}}></img>                            

                            <span style={{fontSize:'10px',float:'left',margin:'1% 8%'}}><a href="#" style={{textDecoration:'none'}}>Acknowledge</a></span>
                            <span style={{fontSize:'10px',float:'left',margin:'1% 11%'}}><a href="#" style={{textDecoration:'none'}}>Express</a></span>
                            <span style={{fontSize:'10px',float:'left',margin:'1% 10%'}}><a href="#" style={{textDecoration:'none'}}>Share</a></span>
                            <span style={{fontSize:'10px',float:'left',margin:'1% 12%'}}><a href="#" style={{textDecoration:'none'}}>Send</a></span>

                            <hr style={{width:'95%',marginTop:'6%'}}></hr>
                        
                        </div>
                        
                    </div>

                </div>
                <div id="SideNavBar" style={{width:'18%',marginLeft:'81%'}}>
                       
                         {/* <h5 id="notify">Profile</h5>  */}
                         <img src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/cover/487.jpg?v=1575095450" style={{height:'27%',width:'100%'}}></img>
                         {/* <hr style={{marginTop:'25%'}}></hr> */}

                         
                         <div id="profile_circle" style={{height:'30%',width:'33%',borderRadius:'60%',marginLeft:'6%',marginTop:'-25%'}}>
                            <img src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg" style={{borderRadius:'60%',width:'99%',height:'100%'}} ></img>
                         </div>

                         {/* <img src="https://image.flaticon.com/icons/png/512/61/61456.png" style={{height:'6%',width:'6%',marginLeft:'89%',marginTop:'-8%'}}></img>  */}
                         <a href="#">
                             <Create />
                         </a>
                         <p style={{margin:'8% 8%',fontWeight:'bold'}}>Abhimanyu Singh</p>
                         <p style={{margin:'-9% 8%'}}>Dabur India Pvt. Ltd</p>
                         <p style={{margin:'8% 8%'}}>IIM Lucknow, Lucknow, India</p>
                         <p style={{margin:'-8% 8%'}}>abhi@gmail.com</p>
                         <p style={{margin:'8% 8%',color:'blue'}}>
                             <ul>
                                 <li>230 connections</li> 
                             </ul>
                             <img src="https://toppng.com/uploads/preview/gold-badge-png-11552734724wixvd59trm.png" style={{height:'12%',width:'14%',marginLeft:'4%',marginTop:'-5%'}}></img>
                            <p style={{marginTop:'-12%',marginLeft:'19%',fontSize:'90%'}}>84 Recommendation Badges</p>
                        </p>
            
                    <span style={{float:'right',fontSize:'10px',paddingRight:'5%',paddingBottom:'12%'}}><a href="#" style={{float:'right',textDecoration:'none'}}></a>
                    <Create1 />
                    </span>
                         
                         
                         
                       

                </div>

                <div id="SideNavBar" style={{width:'18%',marginLeft:'81%',marginTop:'18%'}}>
                    <FontAwesomeIcon icon={faCalendarCheck} size="3x" style={{margin:'3% 7%'}}></FontAwesomeIcon>
                                        
                    <h5 id='notify' style={{marginTop:'-15%'}}>My Schedule</h5>

                    <p style={{margin:'13% 20%'}}>Monday class at 3PM</p>

                </div>

             {  /* <Container id="RightSidebox">
                <div >
                
                    <div id="Notificationbox">
                        <h3 style={{marginLeft:'10%'}}>My Schedule</h3>
                        <h6 style={{marginLeft:'10%'}}>&lt;Current Day's Schedule&gt;</h6><br/>
                        <a style={{marginLeft:'10%'}} href="/timetable" >View More</a><br/><br/><br/>
                    </div>
                
                    <div id="Profilebox">
                        <h3 style={{marginLeft:'10%'}}> PROFILE<br/></h3>
                        <h4 style={{marginLeft:'10%'}}>&lt;NAME&gt;</h4>
                        <a style={{marginLeft:'10%'}} href="/profile" >Edit profile</a><br></br><br></br>
                        <label className="profilecontent">School/College : </label><br></br><br></br>
                        <label className="profilecontent">Year/Standard : </label><br></br><br></br>
                        <label className="profilecontent">Attendance : </label><br></br><br></br>
                    </div>
                </div>
                </Container>  */ }
            </div>

        )
    }
}
export default Community;