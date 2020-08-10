import React from 'react';
import {NavLink} from 'react-router-dom'

import classes from './layout.module.css';

const Layout=props=>{
	return (
		<div className={classes.Layout}>
			<div className={classes.Sidebar}>
				<ul>
					<li><NavLink activeClassName={classes.Active} to='/profile'>Profile</NavLink></li>
					<li><NavLink activeClassName={classes.Active} to='/work-experience'>Work Experience</NavLink></li>
					<li><NavLink activeClassName={classes.Active} to='/time-table'>Time-table</NavLink></li>
					<li><NavLink activeClassName={classes.Active} to='/salary'>Salary</NavLink></li>
					<li><NavLink activeClassName={classes.Active} to='/add'>+ Add</NavLink></li>
				</ul>
			</div>
			<main>
				{props.children}
			</main>
		</div>
	);
};

export default Layout;