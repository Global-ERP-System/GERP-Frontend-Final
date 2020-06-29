  import React from 'react';
import './SideDrawerF.css';

import {BrowserRouter as Router,Route} from 'react-router-dom'
const sideDrawerFaculty = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
    
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/communityf">Home</a></li>
            <li><a href="/raisereqf">Raise a Request</a></li>
            <li><a href="/leavesf">Leaves</a></li>
            <li><a href="/salaryf">Salary</a></li>
            <li><a href='/feedbackf'>View Feedback</a></li>
            <li><a href='appreciationf'>Appreciation Badges</a></li>
            <li><a href="/relationf">My Relations</a></li>
            <li><a href="/internshipf">Student Internships</a></li>     
        </ul>
    </nav>
    
    );
};

export default sideDrawerFaculty;