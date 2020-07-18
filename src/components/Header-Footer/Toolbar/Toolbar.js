import React ,{Component}from 'react';
import DrawerToggleButton from  '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHome, faUser, faBook, faBuilding, faSearch, faComment } from "@fortawesome/free-solid-svg-icons";

import CustomChatbot from '../../chat';
import { FaBlackTie } from 'react-icons/fa';


            
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click = {props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"></div>
            <div className="dropdown">
                <span><a href="/community"><FontAwesomeIcon icon={faHome} style={{marginRight:'0.25em'}} />Home</a></span>
              </div>
            <div className="dropdown" >
                <span><FontAwesomeIcon icon={faBook} style={{marginRight:'0.25em'}}/> Academics</span>
                <div className="dropdown-content">
                    <p><a className="links" href='/previous'>Previous Data</a></p>
                    <p><a className="links" href='/attendance'>Attendance</a></p>
                    <p><a className="links" href='/timetable'>Time Table</a></p>
                    <p><a className="links" href='/exam'>About Exam</a></p>
                    <p><a className="links" href='/fee'>Fee Details</a></p>
                    
                </div>
            </div>
            <div className="dropdown">
                <span><FontAwesomeIcon icon={faBuilding} style={{marginRight:'0.25em'}}/>Campus</span>
                <div className="dropdown-content">
                    <p><a className="links" href='/assignment'>Assignment</a></p>
                    <p><a className="links" href='/project'>Projects</a></p>
                    <p><a className="links" href='/study'>Study Material</a></p>
                    <p><a className="links" href='/research'>Research Paper</a></p>
                  
                </div>
            </div>
            <div className='dropdown'>
                <a href='/profile'><FontAwesomeIcon icon={faUser} style={{marginRight:'0.25em'}}/> Profile</a>
            </div>
            <div className="spacer"/>
            
            <div className = "toolbar_nav-items">
                    
                <ul>
                    <li><form id="demo-2" style={{marginTop:'0px'}}>
                        <input type="search" style={{padding:'0px'}} placeholder='search'/>
                    </form></li>
                    <li><a href='#' ><FontAwesomeIcon icon={faComment} /></a></li>
                    <div className='dropdown'>
                        <li><a href=""><FontAwesomeIcon icon={faBell} /></a></li>
                        <div className="dropdown-content" style={{marginLeft:'-480%',width:'250px',height:'400px'}}>
                            <p>
                                <div id="circle-notify">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" style={{height:'60px',width:'60px',borderRadius:'120px',margin: '5% -2%'}}></img>  
                                <p style={{width:'155px',height:'70px',marginLeft:'120%',marginTop:'-100%'}}>
                                    <a className="links" href=''>Ajeet posted an update</a>
                                </p>
                                </div>
                            </p>
                            <p>
                                <div id="circle-notify">
                                <img src="https://img1.nickiswift.com/img/gallery/the-untold-truth-of-mark-zuckerbergs-wife-priscilla-chan/intro-1583268905.jpg" style={{height:'60px',width:'60px',borderRadius:'120px',margin: '5% -2%'}}></img>  
                                <p style={{width:'155px',height:'70px',marginLeft:'120%',marginTop:'-100%'}}>
                                    <a className="links" href=''>Renu changed her profile</a>
                                </p>
                                </div>
                            </p>
                            <p>
                                <div id="circle-notify">
                                <img src="https://www.manifoldkerala.com/wp-content/uploads/2018/06/buk4.jpg" style={{height:'60px',width:'60px',borderRadius:'120px',margin: '5% -2%'}}></img>  
                                <p style={{width:'155px',height:'70px',marginLeft:'120%',marginTop:'-100%'}}>
                                    <a className="links" href=''>New Study Material added</a>
                                </p>
                                </div>    
                            </p>
                            <p>
                                <div id="circle-notify">
                                <img src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0.jpg" style={{height:'60px',width:'60px',borderRadius:'120px',margin: '5% -2%'}}></img>  
                                <p style={{width:'155px',height:'70px',marginLeft:'120%',marginTop:'-100%'}}>
                                    <a className="links" href=''>Sudipto published his Research Paper</a>
                                </p>
                                </div>
                            </p>

                            <hr style={{width:'100%',marginTop:'25%'}}></hr>

                            {/* <span style={{marginLeft:'36%',marginBottom:'-70px'}}>See All</span> */}
                        </div>
                    </div>
                    <li><a href="/">Logout</a></li>
                </ul>
            </div>
            <CustomChatbot/>
        </nav>
    </header>
);


export default toolbar