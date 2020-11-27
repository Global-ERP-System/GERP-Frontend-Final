import React,{useState} from 'react';

import classes from './RaiseReq.module.css';

import RaiseLeave from './RaiseLeave';
import RaiseReport from './RaiseReport';
import RaiseDoc from './RaiseDoc';

const RaiseReq=props=>{
	const [modal,setModal]=useState(0);
	let renderModal=null;
	switch(modal){
		case 1:
			renderModal=<RaiseLeave close={()=>setModal(0)}/>;
			break;
		case 2:
			renderModal=<RaiseReport close={()=>setModal(0)}/>;
			break;
		case 3:
			renderModal=<RaiseDoc close={()=>setModal(0)}/>;
			break;
		case 0:
			renderModal=null;
			break;
		default:
			renderModal=null;
	}
	return (
		<div className={classes.RaiseReq}>
			<h2>Raise a Request</h2>
			<section>
				<button onClick={()=>setModal(1)}>Leave Application</button>
				<button onClick={()=>setModal(2)}>Report</button>
				<button onClick={()=>setModal(3)}>Document</button>
			</section>
			{renderModal}
		</div>
	);
};

export default RaiseReq;