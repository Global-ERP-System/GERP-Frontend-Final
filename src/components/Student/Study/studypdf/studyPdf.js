import React,{useState} from 'react';
import {FaDownload} from 'react-icons/fa';
import {AiFillCaretDown} from 'react-icons/ai';
import {TiArrowSortedUp} from 'react-icons/ti';

import classes from './studypdf.module.css';

const Study=props=>{
	const [fileOpen,setFileOpen]=useState(false);
	const fileToggleHandler=()=>{
		setFileOpen(!fileOpen);
	}
	let files='No Study Material Available';
	if(props.files.length){
		files=props.files.map(file=>{
			return <li>
				<p>{file}</p>
				<div><a href='#pdf'>view pdf</a><button><FaDownload /></button></div>
			</li>
		})
	}
	return (
		<div className={classes.Study}>
			<div>
				<li>{props.subject}</li>
				<li>{props.teacher}</li>
				<li><button onClick={fileToggleHandler}>{fileOpen?'Hide':'See'} Details&nbsp; 
				{fileOpen?<TiArrowSortedUp />:<AiFillCaretDown />}
				</button></li>
				<li>{props.updated}</li>
			</div>
			<ul style={{display:fileOpen?'block':'none'}}>
				{files}
			</ul>
		</div>
	);
};

export default Study;