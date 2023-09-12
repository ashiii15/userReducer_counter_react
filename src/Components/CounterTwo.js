import React, { useState ,useMemo} from "react";

function CounterTwo() {
  const [counterTwo, SetCounterTwo] = useState(0);
  const [counterThree, SetCounterThree] = useState(0);

  const counterTwoHandler = () => {
    SetCounterTwo(counterTwo + 1);
  };
  const counterThreeHandler = () => {
    SetCounterThree(counterThree + 1);
  };
  const isEven =  useMemo(() => {
    let i =0  
    while(i <2000000000) i++
      return counterTwo % 2 === 0
     
   },[counterTwo])

  return (
    <div>
      <div>
        <button onClick={counterTwoHandler}>counterTwo -{counterTwo}</button>
        <span>{isEven ? `even`:`odd`}</span>
      </div>
      <button onClick={counterThreeHandler}>
        counterThree -{counterThree}
      </button>
    </div>
  );
}

export default CounterTwo;
