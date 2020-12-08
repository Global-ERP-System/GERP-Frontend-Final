import React, { useState } from "react";
import classes from "./studyMaterialFaculty.module.css";
//import { Card } from 'reactstrap';
//import SimpleReactFileUpload from './chooseFile';

const StudyMaterialFaculty = (props) => {
  const [controls, setControls] = useState({
    Subject: { value: "" },
    Concept: { value: "" },
    Class: { value: "" },
    Section: { value: "" },
  });
  const inputChangedHandler = (event, identifier) => {
    const updatedControl = {
      ...controls[identifier],
      value: event.target.value,
    };
    setControls({
      ...controls,
      [identifier]: updatedControl,
    });
  };
  const formArray = [];
  for (let key in controls) {
    formArray.push({
      id: key,
      config: controls[key],
    });
  }
  const displayControls = formArray.map((ele) => {
    return (
      <li key={ele.id}>
        <label className={classes.Label}>{ele.id} :</label>
        <input className={classes.Input} type="text" />
      </li>
    );
  });
  return (
    <div className={`study-material-faculty ${classes.StudyM} `}>
      <h2>Study Materials</h2>
      <ul>{displayControls}</ul>
      <div>
        <p>Choose File</p>
        <input type="file" />
      </div>
      <button>Upload</button>
    </div>
  );
};
export default StudyMaterialFaculty;
