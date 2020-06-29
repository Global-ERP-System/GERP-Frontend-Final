import React from 'react';
import './SideDrawer.css';
import Intern from '../../Student/internship/intern'
import {BrowserRouter as Router,Route} from 'react-router-dom'
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
    <Router>
    <nav className={drawerClasses}>
        <ul>
        
            <li><a href="/raisereq">Raise a Request</a></li>
            <li><a href="/recommendation">Recommendation Badges</a></li>
            <li><a href="/relation">My Relations</a></li>
            <li><a href="/intern">Internships</a></li>
        </ul>
    </nav>
    </Router>
    );
};

export default sideDrawer;