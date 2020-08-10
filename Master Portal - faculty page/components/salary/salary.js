import React from 'react';

import classes from './salary.module.css';
import header from '../profile/profile.module.css';

const Salary=props=>{
	return (
		<div className={classes.Salary}>
			<h2 className={header.Heading}>Salary</h2>
			<ul>
				<li><p>Year/Session</p><p>---</p><p>Rs ......</p></li>
				<li><p>Year/Session</p><p>---</p><p>Rs ......</p></li>
				<li><p>Current Year</p><p>---</p><p>Rs ......</p></li>
			</ul>
		</div>
	);
};

export default Salary;