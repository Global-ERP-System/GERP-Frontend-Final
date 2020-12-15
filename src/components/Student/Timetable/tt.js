import React from 'react';
//import { Card,CardTitle,CardText,CardBody,CardHeader,CardFooter,ButtonToolbar,Button } from 'reactstrap';
//import { Table } from 'reactstrap';
import classes from "./tt.module.css";

const state = {
  start: 8,
  periods: 6,
  periodDuration: 1,
  breakStart: 12,
  breakDuration: 0.5,
  subjects: {
    'Monday': ['OOPS Lab', 'OOPS Lab', 'OOPS', 'AM', 'COA', 'DBMS'],
    'Tuesday': ['COMM SYS Lab', 'COMM SYS Lab', 'AM', 'DBMS', 'COMM SYS', 'OOPS'],
    'Wednesday': ['TOC', 'COA', 'TOC', 'COA', 'AM Lab', 'AM Lab'],
    'Thursday': ['DBMS', 'COMM SYS', 'TOC', 'OOPS', 'DBMS Lab', 'DBMS Lab'],
    'Friday': ['COA Lab', 'COA Lab', 'COA', 'AM', 'TOC', 'COMM SYS'],
    'Saturday': ['AM', 'COMM SYS', 'DBMS', 'TOC', 'NONE', 'NONE']
  }
}

const Timetable = props => {
  //console.log(start);
  const breakS = state.breakStart;
  const breakE = state.breakStart + state.breakDuration;
  const beforeBreak = [...Array((state.breakStart - state.start) / state.periodDuration)].map((_, id) => {
    let timeS = state.start + (id * state.periodDuration);
    let timeE = timeS + state.periodDuration;
    let timeS2 = timeS;
    let timeE2 = timeE;
    if (Math.floor(timeS) > 12)
      timeS2 = timeS - 12;
    if (Math.floor(timeE) > 12)
      timeE2 = timeE - 12
    return <th key={id}>{Math.floor(timeS2)}:{String(((timeS % 1).toFixed(2)) * 60).padStart(2, '0')}&nbsp;{!Math.floor(timeS / 12) ? 'AM' : 'PM'} - {Math.floor(timeE2)}:{String(((timeE % 1).toFixed(2)) * 60).padStart(2, '0')}&nbsp;{!Math.floor(timeE / 12) ? 'AM' : 'PM'}</th>
  })
  const afterBreak = [...Array(state.periods - (state.breakStart - state.start) / state.periodDuration)].map((_, id) => {
    let timeS = (state.breakStart + state.breakDuration) + (id) * state.periodDuration;
    let timeE = timeS + state.periodDuration;
    let timeS2 = timeS;
    let timeE2 = timeE;
    if (Math.floor(timeS) > 12)
      timeS2 = timeS - 12;
    if (Math.floor(timeE) > 12)
      timeE2 = timeE - 12
    return <th key={id}>{Math.floor(timeS2)}:{String(((timeS % 1).toFixed(2)) * 60).padStart(2, '0')}&nbsp;{!Math.floor(timeS / 12) ? 'AM' : 'PM'} - {Math.floor(timeE2)}:{String(((timeE % 1).toFixed(2)) * 60).padStart(2, '0')}&nbsp;{!Math.floor(timeE / 12) ? 'AM' : 'PM'}</th>
  })
  const tableBody = Object.keys(state.subjects).map(day => {
    return <tr key={day}>
      <th>{day}</th>
      {state.subjects[day].map((sub, id) => {
        let flag = (state.breakStart - state.start) / state.periodDuration
        if (id === flag - 1 && day === 'Monday') {
          return (
            <React.Fragment key={id}>
              <td >{sub}</td>
              <td rowSpan='6'>Lunch</td>
            </React.Fragment>
          );
        }
        return <td key={id}>{sub}</td>
      })}
    </tr>
  })
  return (
    <div className={classes.TT}>
      <h2>Time Table</h2>
      <div>
        <table class="table table-bordered table-advanced table-striped  table-bordered-black" id="sample_1">
          <thead>
            <tr>
              <th></th>
              {beforeBreak}
              <th>{breakS}:{String((((breakS) % 1).toFixed(2)) * 60).padStart(2, '0')}&nbsp;{!Math.floor(breakS / 12) ? 'AM' : 'PM'} - {Math.floor(breakE)}:{String((((breakE) % 1).toFixed(2)) * 60).padStart(2, '0')}&nbsp;{!Math.floor(breakE / 12) ? 'AM' : 'PM'}</th>
              {afterBreak}
            </tr>
          </thead>
          <tbody>
            {tableBody}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Timetable;