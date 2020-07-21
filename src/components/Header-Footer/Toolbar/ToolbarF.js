import React from 'react';
import DrawerToggleButton from  '../SideDrawer/DrawerToggleButton';
import './ToolbarF.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click = {props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"></div>
            <div className="dropdown">
                <span><Link to="/communityf">Home</Link></span>
              </div>
            <div className="dropdown" >
                <span>Academics</span>
                <div className="dropdown-content">
                    <p><Link className="links" to='/attendencef'>Attendance</Link></p>
                    <p><Link className="links" to='/timetablef'>Timetable</Link></p>
                    <p><Link className="links" to='/examf'>Examination</Link></p>
                </div>
            </div>
            <div className="dropdown">
                <span>Campus</span>
                <div className="dropdown-content">
                    <p><Link className="links" to='/assignmentf'>Assignments</Link></p>
                    <p><Link className="links" to='/projectf'>Projects</Link></p>
                    <p><Link className="links" to='/studyf'>Study Material</Link></p>
                    <p><Link className="links" to='/researchf'>Research Paper</Link></p>
                </div>
            </div>
            <div className='dropdown'>
                <span><Link to="/profilef">Profile</Link></span>
            </div>
            <div className="spacer"/>
            <div className = "toolbar_nav-items">
                <ul>
                    <li><Link to="/"><FontAwesomeIcon icon={faBell} /></Link></li>
                    <li><Link to="/" onClick={()=>props.clickFuncStaff()} >Logout</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);


export default toolbar