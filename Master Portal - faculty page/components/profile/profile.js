import React from 'react';

import classes from './profile.module.css';

import Img from '../../assets/user.jpg'

const Profile=props=>{
	return (
		<div className={classes.Profile}>
			<h2 className={classes.Heading}>Profile</h2>
			<input type='text' placeholder='search faculty name'/>
			<div className={classes.Result}>
				<div className={classes.Info}>
					<p>Department:</p>
					<p>Subject:</p>
					<p>Year of Joining:</p>
					<p>Age:</p>
					<p>College ID:</p>
					<p>Email ID:</p>
					<button>+ Add Field</button>
				</div>
				<div className={classes.Image}>
					<h3>&#8826;Faculty Name&#8827;</h3>
					<img src={Img} alt='alt-img.jpg' />
				</div>
			</div>
		</div>
	);
};

export default Profile;