import React from 'react';

import classes from './timeTable.module.css';
import header from '../profile/profile.module.css';

const TimeTable=props=>{
	return (
		<div className={classes.Table}>
			<h2 className={header.Heading}>Time-table</h2>
			<table >
				<thead>
					<tr>
						<th>Days</th>
						<th>Lorem</th>
						<th>Lorem</th>
						<th>Timings</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowSpan='3'>Monday</td>
						<td>Lorem</td>
						<td>X</td>
						<td>12:30 pm - 3:00 pm</td>
					</tr>
					<tr>
						<td>Lorem</td>
						<td>X</td>
						<td>12:30 pm - 3:00 pm</td>
					</tr>
					<tr>
						<td>Lorem</td>
						<td>X</td>
						<td>12:30 pm - 3:00 pm</td>
					</tr>
					<tr>
						<td rowSpan='3'>Tuesday</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TimeTable;