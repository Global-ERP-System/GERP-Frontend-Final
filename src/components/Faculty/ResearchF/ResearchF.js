// Install Bootstrap Using --> npm install bootstrap
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// then add this path in app.js to use bootstrap

import React from 'react';

import classes from './ResearchF.module.css';

const Research=props=>{
    return (
        <div className={classes.Research}>
        	<div>
        		<h1>No research is ever quite complete. It is the glory of a good bit of work that it 
        		opens the way for something still better, and this repeatedly leads to its own eclipse.</h1>
        		<h2> - Mervin Gordon </h2>
        		<form>
        			<p>Upload Your Research Paper</p>
        			<input type='file' /><br />
        			<button>SUBMIT</button>
        		</form>
        	</div>
        </div>
    );
};

export default Research;
