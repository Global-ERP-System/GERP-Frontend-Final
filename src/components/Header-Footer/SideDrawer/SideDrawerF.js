  import React from 'react';
import './SideDrawerF.css';

import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
const sideDrawerFaculty = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
    
    <nav className={drawerClasses}>
        <ul>
            <li><Link to="/communityf">Home</Link></li>
            <li><Link to="/raisereqf">Raise a Request</Link></li>
            <li><Link to="/leavesf">Leaves</Link></li>
            <li><Link to="/salaryf">Salary</Link></li>
            <li><Link to='/feedbackf'>View Feedback</Link></li>
            <li><Link to='appreciationf'>Appreciation Badges</Link></li>
            <li><Link to="/relationf">My Relations</Link></li>
            <li><Link to="/internshipf">Student Internships</Link></li>     
        </ul>
    </nav>
    
    );
};

export default sideDrawerFaculty;