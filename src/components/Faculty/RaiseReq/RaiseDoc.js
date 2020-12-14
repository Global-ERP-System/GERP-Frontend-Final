import React, { useState } from "react";

import RaiseModal from "./RaiseModal";

const RaiseDoc = (props) => {
  const [ /*controls*/, setControls] = useState("");
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
          <label className="mr-2">Name of Document</label>
          <input type="text" onChange={inputChangeHandler} />
        </div>
        <button>Submit</button>
      </form>
    </RaiseModal>
  );
};

export default RaiseDoc;
