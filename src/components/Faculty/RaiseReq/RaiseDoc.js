import React,{useState} from 'react';

import RaiseModal from './RaiseModal';

const RaiseDoc=props=>{
	const [controls,setControls]=useState('')
	const inputChangeHandler=(event)=>{
		setControls(event.target.value);
	}
	return (
		<RaiseModal clicked={props.close}>
			<form>
				<div>
					<label>Name of Document</label>
					<input type='text' onChange={inputChangeHandler} />
				</div>
				<button>Submit</button>
			</form>
		</RaiseModal>
	);
};

export default RaiseDoc;