import React from 'react';
import DrawerToggleButton from  '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHome, faUser, faBook, faBuilding, faSearch, faComment } from "@fortawesome/free-solid-svg-icons";
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
                    <li><a href='/'><FontAwesomeIcon icon={faSearch} /></a></li>
                    <li><a href='/'><FontAwesomeIcon icon={faComment} /></a></li>
                    <div className='dropdown'>
                        <li><a href=""><FontAwesomeIcon icon={faBell} /></a></li>
                        <div className="dropdown-content" style={{marginLeft:'-480%',width:'250px',height:'400px'}}>
                            <p><a className="links" href=''>Ajeet posted an update</a></p>
                            <p><a className="links" href=''>Renu changed her profile</a></p>
                            <p><a className="links" href=''>New study material added</a></p>
                            <p><a className="links" href=''>Sudipto published his Research Paper</a></p>
                        </div>
                    </div>
                    
                    <li><a href="/">Logout</a></li>
                </ul>
                
            </div>
        </nav>
    </header>
);

export default toolbar