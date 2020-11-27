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
  
    <nav className={drawerClasses} style={{height:'240px',width:'10%'}}>
        <ul>
            <li style={{marginTop:'-20px'}}><Link to="/raisereq" style={{marginLeft:'-32px'}}>Raise a Request</Link></li>
            <li><Link to="/recommendation" style={{marginLeft:'-32px',float:'left'}}>Recommendation Badges</Link></li>
            <li><Link to="/relation" style={{marginLeft:'-32px'}}>My Relations</Link></li>
            <li><Link to="/intern" style={{marginLeft:'-32px'}}>Internships</Link></li>
        </ul>
    </nav>
   
    );
};

export default sideDrawer;