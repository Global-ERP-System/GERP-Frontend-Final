import React from 'react';
import DrawerToggleButton from  '../SideDrawer/DrawerToggleButton';
import './ToolbarF.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click = {props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"></div>
            <div className="dropdown">
                <span><a href="/communityf">Home</a></span>
              </div>
            <div className="dropdown" >
                <span>Academics</span>
                <div className="dropdown-content">
                    <p><a className="links" href='/attendencef'>Attendance</a></p>
                    <p><a className="links" href='/timetablef'>Timetable</a></p>
                    <p><a className="links" href='/examf'>Examination</a></p>
                </div>
            </div>
            <div className="dropdown">
                <span>Campus</span>
                <div className="dropdown-content">
                    <p><a className="links" href='/assignmentf'>Assignments</a></p>
                    <p><a className="links" href='/projectf'>Projects</a></p>
                    <p><a className="links" href='/studyf'>Study Material</a></p>
                    <p><a className="links" href='/researchf'>Research Paper</a></p>
                </div>
            </div>
            <div className='dropdown'>
                <span><a href="/profilef">Profile</a></span>
            </div>
            <div className="spacer"/>
            <div className = "toolbar_nav-items">
                <ul>
                    <li><a href="/"><FontAwesomeIcon icon={faBell} /></a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </div>
        </nav>
    </header>
);


export default toolbar