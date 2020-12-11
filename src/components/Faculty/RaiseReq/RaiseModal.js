import React from "react";

import classes from "./RaiseModal.module.css";

const RaiseModal = (props) => {
  return (
    <React.Fragment>
      <div onClick={props.clicked} className={classes.Backdrop}></div>
      <div className={classes.Modal}>
        <button onClick={props.clicked}>X</button>
        <section className="m-4">{props.children}</section>
      </div>
    </React.Fragment>
  );
};

export default RaiseModal;
