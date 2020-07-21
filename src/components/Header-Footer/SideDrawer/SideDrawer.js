import React from 'react';
import './SideDrawer.css';
import Intern from '../../Student/internship/intern'
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
  
    <nav className={drawerClasses}>
        <ul>
            <li><Link to="/raisereq" >Raise a Request</Link></li>
            <li><Link to="/recommendation">Recommendation Badges</Link></li>
            <li><Link to="/relation">My Relations</Link></li>
            <li><Link to="/intern">Internships</Link></li>
        </ul>
    </nav>
   
    );
};

export default sideDrawer;