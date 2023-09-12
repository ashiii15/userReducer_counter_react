import React, { useContext } from "react";
import { CountContex } from "../App";

function ComponentA() {
  const countContex = useContext(CountContex);
  return (
    <div>
      ComponentA
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

export default ComponentA;
