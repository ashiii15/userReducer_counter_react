import React, { useEffect, useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('')
  useEffect(()=>{
    console.log('useEffect updating title');
    document.title = `${count}`

  })
   const changeHandler = (e)=>{
    setName(e.target.value)
  }
  return (
    <>
    <input type="text" value={name} onChange={()=>changeHandler}></input>
    <button onClick={()=>setCount(count + 1)}>click{count}</button>
    </>


  );
};
