import React, { useState } from "react";

import RaiseModal from "./RaiseModal";
import MainModal from '../../Alert-Modal/submit-modal';

const RaiseReport = (props) => {
  const [/*controls,*/ setControls] = useState("");
  const inputChangeHandler = (event) => {
    setControls(event.target.value);
  };
  return (
    <RaiseModal clicked={props.close}>
      <form>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <label>Name of Report</label>
          <input type="text" onChange={inputChangeHandler} />
        </div>
        <MainModal />
      </form>
    </RaiseModal>
  );
};

export default RaiseReport;
