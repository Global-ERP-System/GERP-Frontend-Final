import React ,{Component}from 'react';
import DrawerToggleButton from  '../SideDrawer/DrawerToggleButton';
import './ToolbarF.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHome, faUser, faBook, faBuilding, faSearch, faComment } from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import CustomChatbot from '../../chat';

import MessageBox from '../newChat';

// class toolbar extends  Component{
//     constructor(props)
//     {
//         super(props);
//         this.state={
//             showComponent:false
//         }
//         this.onButtonClick=this.onButtonClick.bind(this);
//     }

//         onButtonClick() {
//             alert("i was called");
//             this.setState({
//             showComponent: true
//             });
        
//         }
//   render(){
//         return(
const toolbar = props => (
    
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click = {props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"></div>
            <div className="dropdown">
                <span><Link to="/communityF"><FontAwesomeIcon icon={faHome} style={{marginRight:'0.25em'}} />Home</Link></span>
              </div>
            <div className="dropdown" >
                <span><FontAwesomeIcon icon={faBook} style={{marginRight:'0.25em'}}/> Academics</span>
                <div className="dropdown-content">
                    <div id="triangle-up"></div>
                    <p style={{marginTop:'13px'}}><Link className="links" to='/attendencef'>Attendance</Link></p>
                    <p><Link className="links" to='/timetablef'>Time Table</Link></p>
                    <p><Link className="links" to='/examf'>About Exam</Link></p>
                    <p><Link className="links" to='/salaryf'>Salary Details</Link></p>
                    
                </div>
            </div>
            <div className="dropdown">
                <span><FontAwesomeIcon icon={faBuilding} style={{marginRight:'0.25em'}}/>Campus</span>
                <div className="dropdown-content">
                    <div id="triangle-up" style={{marginTop:'-27px'}}></div>
                    <p style={{marginTop:'13px'}}><Link  className="links" to='/assignmentf'>Assignment</Link></p>
                    <p><Link  className="links" to='/projectf'>Projects</Link></p>
                    <p><Link  className="links" to='/studyf'>Study Material</Link></p>
                    <p><Link  className="links" to='/researchf'>Research Paper</Link></p>
                  
                </div>
            </div>
            <div className='dropdown'>
                <Link to='/profile'><FontAwesomeIcon icon={faUser} style={{marginRight:'0.25em'}}/> Profile</Link>
            </div>
            <div className="spacer"/>
            
            <div className = "toolbar_nav-items">
                    
                <ul>
                    <li><form id="demo-2" style={{marginTop:'0px'}}>
                        <input type="search" style={{padding:'0px'}} placeholder='search'/>
                    </form></li>
                        {/* chat */}
                    <li><MessageBox/></li>   
                    {/* <div className='dropdown'>
                        <li><Link to=""><FontAwesomeIcon icon={faComment} /></Link></li>
                        <div className="dropdown-content" style={{marginLeft:'-480%',width:'250px',height:'400px'}}>
                            <p>
                                <div id="circle-notify">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" style={{height:'60px',width:'60px',borderRadius:'120px',margin: '5% -2%'}}></img>  
                                <p style={{width:'155px',height:'70px',marginLeft:'120%',marginTop:'-100%'}}>
                                <Link  to='#' onClick={this.onButtonClick}>Ajeet </Link>
                                
                                </p>
                                </div>
                            </p>
                            <p>
                                <div id="circle-notify">
                                <img src="https://img1.nickiswift.com/img/gallery/the-untold-truth-of-mark-zuckerbergs-wife-priscilla-chan/intro-1583268905.jpg" style={{height:'60px',width:'60px',borderRadius:'120px',margin: '5% -2%'}}></img>  
                                <p style={{width:'155px',height:'70px',marginLeft:'120%',marginTop:'-100%'}}>
                                    <Link className="links" to='/singlepost'>Renu </Link>
                                </p>
                                </div>
                            </p>
                            <p>
                                <div id="circle-notify">
                                <img src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0.jpg" style={{height:'60px',width:'60px',borderRadius:'120px',margin: '5% -2%'}}></img>  
                                <p style={{width:'155px',height:'70px',marginLeft:'120%',marginTop:'-100%'}}>
                                    <Link className="links" to='/singlepost'>Sudipto</Link>
                                </p>
                                </div>
                            </p>
                        </div>
                    </div>
                    <li><MessageBox/> </li> */}

                    <div className='dropdown'>
                        <li><FontAwesomeIcon icon={faBell} /></li>
                        <div className="dropdown-content" style={{marginLeft:'-480%',width:'250px',height:'400px'}}>
                            <p>
                                <div id="circle-notify">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" style={{height:'60px',width:'60px',borderRadius:'120px',margin: '5% -2%'}}></img>  
                                <p style={{width:'155px',height:'70px',marginLeft:'120%',marginTop:'-100%'}}>
                                    <Link className="links" to='/singlepost'>Ajeet posted an update</Link>
                                </p>
                                </div>
                            </p>
                            <p>
                                <div id="circle-notify">
                                <img src="https://img1.nickiswift.com/img/gallery/the-untold-truth-of-mark-zuckerbergs-wife-priscilla-chan/intro-1583268905.jpg" style={{height:'60px',width:'60px',borderRadius:'120px',margin: '5% -2%'}}></img>  
                                <p style={{width:'155px',height:'70px',marginLeft:'120%',marginTop:'-100%'}}>
                                    <Link className="links" to='/singlepost'>Renu changed her profile</Link>
                                </p>
                                </div>
                            </p>
                            <p>
                                <div id="circle-notify">
                                <img src="https://www.manifoldkerala.com/wp-content/uploads/2018/06/buk4.jpg" style={{height:'60px',width:'60px',borderRadius:'120px',margin: '5% -2%'}}></img>  
                                <p style={{width:'155px',height:'70px',marginLeft:'120%',marginTop:'-100%'}}>
                                    <Link className="links" to='/singlepost'>New Study Material added</Link>
                                </p>
                                </div>    
                            </p>
                            <p>
                                <div id="circle-notify">
                                <img src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0.jpg" style={{height:'60px',width:'60px',borderRadius:'120px',margin: '5% -2%'}}></img>  
                                <p style={{width:'155px',height:'70px',marginLeft:'120%',marginTop:'-100%'}}>
                                    <Link className="links" to='/singlepost'>Sudipto published his Research Paper</Link>
                                </p>
                                </div>
                            </p>

                            <hr style={{width:'100%',marginTop:'25%'}}></hr>

                            <p style={{marginTop:'-6%',marginLeft:'40%'}}><Link to='/Allposts' style={{color:'blue',textDecoration:'none'}}>See All</Link></p>

                        </div>
                    </div>
                   <li><Link to="/" onClick={()=>props.clickFunc()} >Logout</Link></li>
                    
                </ul>
            </div>
            {/* <CustomChatbot/> */}
        </nav>
        {/* {this.state.showComponent ? <p>true</p> : <p>false</p>}
        {this.state.showComponent ? <MessageBox value={true}/> :null} */}
    </header>
);
// }
// }

export default toolbar