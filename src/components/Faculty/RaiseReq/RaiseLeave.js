import React,{useState} from 'react';

import RaiseModal from './RaiseModal';

const RaiseLeave=props=>{
	const [controls,setControls]=useState({
		'From Date':'',
		'To Date':'',
		'Reason of Leave':''
	})
	const inputChangeHandler=(event,identifier)=>{
		setControls({
			...controls,
			[identifier]:event.target.value
		})
	}
	return (
		<RaiseModal clicked={props.close}>
			<form>
				<div>
					<label>From date</label>
					<input type='date' onChange={(event)=>inputChangeHandler(event,'From Date')} />
				</div>
				<div>
					<label>To date</label>
					<input type='date' onChange={(event)=>inputChangeHandler(event,'To Date')} />
				</div>
				<div>
					<label>Reason of Leave</label>
					<textarea onChange={(event)=>inputChangeHandler(event,'Reason of Leave')} />
				</div>
				<button>Submit</button>
			</form>
		</RaiseModal>
	);
};

export default RaiseLeave;