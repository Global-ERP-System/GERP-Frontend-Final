import React, { Component } from 'react'
import './Community.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHome, faUser, faBook, faBuilding, faSearch, faComment  } from "@fortawesome/free-solid-svg-icons";
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
                <div id="SideNavBar">
                        <div className='container notif'>
                            <h5 id='notify'>Notifications</h5>

{/*                             
                            <ul id="notify-points" style={{marginLeft:'-84%',marginTop:'25px'}}>
                                <marquee direction='up' scrollamount='4'>
                                <li>Attendance updated for Sem 1</li><br></br>
                                <li>Attendance updated for Sem 1</li><br></br>
                                <li>Attendance updated for Sem 1</li><br></br>
                                <li>Attendance updated for Sem 1</li><br></br>
                                <li>Attendance updated for Sem 1</li><br></br>
                                </marquee>
                            </ul> */}
                            

                        </div>
                        <br></br>
                        <div className='container ads' style={{height:'280%',marginTop:'-3%'}}>
                            {/* <h5>ADs</h5> */}
                            <img src="https://camblycontent.files.wordpress.com/2017/02/advertising-word-block.jpg?w=640" style={{height:'110%',marginTop:'-5%',marginLeft:'-2%',width:'103%'}}></img>
                        </div>
                </div>
                <div id="Contentbox"style={{height:'316px',marginRight:'-135px',marginTop:'-60px'}}>
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
                            <label id="Visibility1"style={{marginTop:'-3%',marginLeft:'20%'}}>Visibility:</label>
                            <select value={this.state.visibility} onChange={this.handleVisibilityChange} id="Visibility2" style={{marginTop:'-4%'}}>
                                <option value="Public">Public </option>
                                <option value="ClassMate">Classmates</option>
                                <option value="SubOrdinates">Subordinates</option>
                            </select>
                        </div>
                        <div>
                            <button id="Post">Post</button>
                        </div>
                    </form>
                    <div id="Recent">
                        <label className="recentheading">Recent posts</label>

                    </div>
                </div>
                <div id="SideNavBar" style={{width:'22%',marginLeft:'10%'}}>
                        <div className='container profile' style={{marginTop:'0px'}}>
                         {/* <h5 id="notify" style={{marginLeft:'90px'}}>Profile</h5> */}

                         <hr style={{width:'95%',marginTop:'12%'}}></hr>
                         
                         {/* <div className="container profile_pic">
                             <img src="https://www.freeiconspng.com/uploads/user-login-icon-14.png" style={{marginLeft: '40%',marginTop:'-80%'}}></img>
                         </div> */}

                         {/* <span style={{position:'absolute',marginTop:'2%'}}><FontAwesomeIcon icon={faUser} style={{marginRight:'0.25em'}} />Renu Singh</span>
                         <span style={{position:'absolute',marginTop:'4%'}}><FontAwesomeIcon icon={faUser} style={{marginRight:'0.25em'}} />renu@gmail.com</span>
                         <span style={{position:'absolute',marginTop:'6%'}}><FontAwesomeIcon icon={faBuilding} style={{marginRight:'0.25em'}} />BVP</span>
                         <span style={{position:'absolute',marginTop:'8%'}}><FontAwesomeIcon icon={faUser} style={{marginRight:'0.25em'}} />9243511678</span>
                         <span style={{position:'absolute',marginTop:'10%'}}><FontAwesomeIcon icon={faBook} style={{marginRight:'0.25em'}} />B.Tech CS</span>
                         <span style={{position:'absolute',marginTop:'12%'}}><FontAwesomeIcon icon={faUser} style={{marginRight:'0.25em'}} />Semester II</span> */}
                         {/* <div id="profile_details"style={{width:'30%'}}>
                           
                         </div> */}

                             {/*  <h6>&lt;NAME&gt;</h6><br/>
                            
                        <a href="/profile" >Edit profile</a><br></br><br></br>
                        <label className="profilecontent">School/College : </label><br></br><br></br>
                        <label className="profilecontent">Year/Standard : </label><br></br><br></br>
                        <label className="profilecontent">Attendance : </label><br></br><br></br> */}
                        </div>
                        <div className='container schedule' style={{height:'302%',marginTop:'5%'}}>
                            <img src="https://toppng.com/uploads/preview/free-icons-png-calendar-11562886581wuta4pegbh.png" style={{marginTop:'-25px',marginLeft:'-8px'}}></img>
                            <h5>My Schedule</h5>

                            <span style={{position:'absolute',marginTop:'5%'}}>Monday: 3 classes planned</span>
                            <span style={{position:'absolute',marginTop:'7%'}}>Monday: 3 classes planned</span>
                            <span style={{position:'absolute',marginTop:'9%'}}>Monday: 3 classes planned</span>
                            <span style={{position:'absolute',marginTop:'11%'}}>Monday: 3 classes planned</span>
                            <span style={{position:'absolute',marginTop:'13%'}}>Monday: 3 classes planned</span>
                            <span style={{position:'absolute',marginTop:'15%'}}>Monday: 3 classes planned</span>

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