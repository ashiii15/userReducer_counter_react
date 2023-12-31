import React, { useContext } from "react";
import { CountContex } from "../App";

function ComponentF() {
  const countContex = useContext(CountContex);
  return (
    <div>
      ComponentF
      <button onClick={() => countContex.countDispatch("increment")}>
        increment
      </button>
      <button onClick={() => countContex.countDispatch("decrement")}>
        decrement
      </button>
      <button onClick={() => countContex.countDispatch("reset")}>reset</button>
    </div>
  );
}

export default ComponentF;
