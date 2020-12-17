import React, { useState } from "react";
import RaiseModal from "./RaiseModal";
import MainModal from '../../Alert-Modal/submit-modal';

const RaiseLeave = (props) => {
  const [controls, setControls] = useState({
    "From Date": "",
    "To Date": "",
    "Reason of Leave": "",
  });
  const inputChangeHandler = (event, identifier) => {
    setControls({
      ...controls,
      [identifier]: event.target.value,
    });
  };
  return (
    <RaiseModal clicked={props.close}>
      <form>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px",
          }}
        >
          <label className="mr-2">From date</label>
          <input
            type="date"
            onChange={(event) => inputChangeHandler(event, "From Date")}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px",
          }}
        >
          <label className="mr-2">To date</label>
          <input
            type="date"
            onChange={(event) => inputChangeHandler(event, "To Date")}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px",
          }}
        >
          <label className="mr-2">Reason of Leave</label>
          <textarea
            rows={4}
            onChange={(event) => inputChangeHandler(event, "Reason of Leave")}
          />
        </div>
        <MainModal />
      </form>
    </RaiseModal>
  );
};

export default RaiseLeave;
