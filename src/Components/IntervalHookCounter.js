import React, { useEffect, useState } from "react";
export const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    const interval = setInterval(increment, 1000);
    return () => {
      clearInterval(interval)
    };
  });
  return <h1>{count}</h1>;
};
