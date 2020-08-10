import React,{useState} from 'react';

import classes from './work.module.css';
import header from '../profile/profile.module.css';

const Work=props=>{
	const [modalOpen,setModalOpen]=useState(false);
	const openModalHandler=()=>{
		setModalOpen(true);
	}
	const closeModalHandler=()=>{
		setModalOpen(false);
	}
	return (
		<div className={classes.Work}>
			<h2 className={header.Heading}>Work Experience</h2>
			<section>
				<h3>Bachelors Degree</h3>
				<ul>
					<li>College Name: <div>MSIT</div></li>
					<li>Year / Session: <div>2</div></li>
					<li>Course: <div>CSE</div></li>
				</ul>
			</section>
			<section>
				<h3>Masters Degree</h3>
				<ul>
					<li>College Name: <div>MSIT</div></li>
					<li>Year / Session: <div>1</div></li>
					<li>Course: <div>MCA</div></li>
				</ul>
			</section>
			<section>
				<h3>Phd</h3>
				<ul>
					<li>University Name: <div>MSIT</div></li>
					<li>Year / Session: <div>2</div></li>
					<li>Course: <div>CSE</div></li>
					<li>Research Paper: <div>Lorem</div></li>
					<li>Any book published: <div>Lorem</div></li>
				</ul>
			</section>
			<section>
				<h3>Job</h3>
				<ul>
					<li>Company / Institution:<div>Lorem</div></li>
					<li>Position of Work: <div>Lorem</div></li>
				</ul>
			</section>
			<button onClick={openModalHandler} className={classes.Add}>Add More Jobs</button>
			{modalOpen?<div onClick={closeModalHandler} className={classes.Backdrop}></div>:null}
			<div style={{
				opacity:modalOpen?'1':'0',
				transform:modalOpen?'translateY(0)':'translateY(-100vh)'
			}}className={classes.Modal}>
				<button onClick={closeModalHandler}>X</button>
				<input type='text' placeholder='Company / Institution'/>
				<input type='text' placeholder='Position of Work'/>
				<button>Add</button>
			</div>
		</div>
	);
};

export default Work;