import React ,{Component}from 'react';
import DrawerToggleButton from  '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHome, faUser, faBook, faBuilding, faSearch, faComment } from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import CustomChatbot from '../../chat';


            
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click = {props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"></div>
            <div className="dropdown">
                <span><Link to="/community"><FontAwesomeIcon icon={faHome} style={{marginRight:'0.25em'}} />Home</Link></span>
              </div>
            <div className="dropdown" >
                <span><FontAwesomeIcon icon={faBook} style={{marginRight:'0.25em'}}/> Academics</span>
                <div className="dropdown-content">
                    <p><Link className="links" to='/previous'>Previous Data</Link></p>
                    <p><Link className="links" to='/attendance'>Attendance</Link></p>
                    <p><Link className="links" to='/timetable'>Time Table</Link></p>
                    <p><Link className="links" to='/exam'>About Exam</Link></p>
                    <p><Link className="links" to='/fee'>Fee Details</Link></p>
                    
                </div>
            </div>
            <div className="dropdown">
                <span><FontAwesomeIcon icon={faBuilding} style={{marginRight:'0.25em'}}/>Campus</span>
                <div className="dropdown-content">
                    <p><Link  className="links" to='/assignment'>Assignment</Link></p>
                    <p><Link  className="links" to='/project'>Projects</Link></p>
                    <p><Link  className="links" to='/study'>Study Material</Link></p>
                    <p><Link  className="links" to='/research'>Research Paper</Link></p>
                  
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
                    <li><Link to='#' ><FontAwesomeIcon icon={faComment} /></Link></li>
                    <li><Link to="/"><FontAwesomeIcon icon={faBell} /></Link></li>
                    <li><Link to="/" onClick={()=>props.clickFunc()}>Logout</Link></li>
                </ul>
            </div>
            <CustomChatbot/>
        </nav>
    </header>
);


export default toolbar