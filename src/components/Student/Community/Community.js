import React, { Component } from 'react'
import './Community.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHome, faUser, faBook, faBuilding, faSearch, faComment, faCalendar, faCalendarCheck  } from "@fortawesome/free-solid-svg-icons";
//import "@reach/menu-button/styles.css";
import {Container} from 'reactstrap';


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
                        <div className='container notif' style={{marginTop:'-2px'}}>
                            <h5 id='notify'>Notifications</h5>

                            
                            <ul id="notify-points" style={{marginLeft:'-84%',marginTop:'25px'}}>
                                <marquee direction='up' scrollamount='4'>
                                <li>Attendance updated for Sem 1</li><br></br>
                                <li>Attendance updated for Sem 1</li><br></br>
                                <li>Attendance updated for Sem 1</li><br></br>
                                <li>Attendance updated for Sem 1</li><br></br>
                                <li>Attendance updated for Sem 1</li><br></br>
                                </marquee>
                            </ul>
                            

                        </div>
                        <br></br>
                        <div className='container ads' style={{height:'310%',marginTop:'-3%'}}>
                            {/* <h5>ADs</h5> */}
                            <img src="https://camblycontent.files.wordpress.com/2017/02/advertising-word-block.jpg?w=640" style={{height:'110%',marginTop:'-5%',marginLeft:'-2%',width:'103%'}}></img>
                        </div>
                </div>
                <div id="Contentbox"style={{height:'316px',marginRight:'-135px',marginTop:'-60px', marginLeft:'20%'}}>
                    <h3 className="Community"style={{fontSize:'28px',padding:'2px'}}>Community Forum</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div  style={{marginTop:'-10%'}}>
                            <label className="commentheading">Write a Post</label>
                            <textarea value={this.state.Comment}
                                onChange={this.handlePostChange} cols="80" rows="5" placeholder="Write Something..."
                                className="something"></textarea></div>
                        <div>
                            <button id="Tags">Tag</button>
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

                        <div id="designation">Nikita Khanna</div>  

                        </div>

                        <div id="post-content"></div>
                        
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem </p>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem </p>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem </p>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem </p>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem  </p>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem </p>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem  </p>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
                        <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem </p>
                        
                    </div>
                </div>
                <div id="SideNavBar" style={{width:'18%',marginLeft:'81%'}}>
                        <div className='container profile' style={{marginTop:'0px'}}>
                         {/* <h5 id="notify" style={{marginLeft:'90px'}}>Profile</h5> */}

                         <hr style={{width:'90%',marginTop:'12%',marginLeft:'6%'}}></hr>

                         
                         
                         <ul style={{marginLeft:'-175%',marginTop:'4%'}}>
                             <li style={{fontSize:'90%',marginLeft:'-4%',paddingRight:'4%'}}>340 relations</li>
                         </ul>

                         <img src="https://image.flaticon.com/icons/png/512/61/61456.png" style={{height:'12%',width:'4%',position:'absolute',marginTop:'3%'}}></img>

                         <div id="profile_circle" style={{height:'30%',width:'30%',borderRadius:'60%',marginTop:'-6%'}}>
                            <img src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg" style={{borderRadius:'60%',width:'99%',height:'100%'}} ></img>
                         </div>

                         <div id="content_profile" style={{position:'absolute',marginTop:'3%'}}>
                             {/* <span>Welcome,</span> */}
                                {/* <br></br> */}
                                <br></br>
                                <br></br>
                                
                             <div style={{marginLeft:'-16%',width:'120%',fontSize:'14px'}}>Abhimanyu Singh</div>
                             <div style={{marginLeft:'-13%',width:'120%',fontSize:'14px'}}>Dabur India Pvt Ltd.</div>
                             <div style={{marginLeft:'80%',width:'120%',fontSize:'14px'}}>IIM, Lucknow</div>
                             <div style={{marginLeft:'80%',width:'120%',fontSize:'14px'}}>MBA - II Semester</div>
                             <div style={{marginLeft:'80%',width:'120%',fontSize:'14px'}}>abhi@gmail.com</div><br></br>
                             <div style={{marginLeft:'20%',width:'120%'}}>
                                 <img src="https://toppng.com/uploads/preview/gold-badge-png-11552734724wixvd59trm.png" style={{width:'30%',height:'20%',position:'absolute'}}></img>
                                 <span style={{position:'absolute',fontSize:'14px',width:'130%',marginLeft:'-30%',marginTop:'6%'}}>84 Recommendation Badges</span>
                             </div>
                             
                             <span style={{float:'right',fontSize:'10px',marginTop:'50%',marginRight:'-80%',width:'50%'}}><a href="#" style={{float:'right',textDecoration:'none'}}>View Details</a></span>
                         </div>
                         
                         
                        </div>
                        <div className='container schedule' style={{height:'302%',marginTop:'5%'}}>
                        
                        <FontAwesomeIcon icon={faCalendarCheck} size="3x"></FontAwesomeIcon>
                        <h5 style={{marginLeft:'15%', marginTop:'5%'}}>My Schedule</h5>
                           {/* <img src="https://toppng.com/uploads/preview/free-icons-png-calendar-11562886581wuta4pegbh.png" style={{marginTop:'-25px',marginLeft:'-8px'}}></img>
                            <h5 id="notify"style={{marginRight:'20px'}}>My Schedule</h5>

                            <span style={{position:'absolute',marginTop:'5%'}}>Monday: 3 classes planned</span>
                            <span style={{position:'absolute',marginTop:'7%'}}>Monday: 3 classes planned</span>
                            <span style={{position:'absolute',marginTop:'9%'}}>Monday: 3 classes planned</span>
                            <span style={{position:'absolute',marginTop:'11%'}}>Monday: 3 classes planned</span>
                            <span style={{position:'absolute',marginTop:'13%'}}>Monday: 3 classes planned</span>
                            <span style={{position:'absolute',marginTop:'15%'}}>Monday: 3 classes planned</span> */}

                            <span style={{position:'absolute',fontSize:'13px',marginTop:'25%',marginLeft:'15%'}}>Monday: 3 classes planned</span>

                        </div>
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