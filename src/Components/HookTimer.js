import React, { createRef, useEffect, useRef, useState } from 'react'

function HookTimer() {
    const [counter,setCounter] =useState(0)
    const timerRef = useRef()
    useEffect(()=>{
        timerRef.current= setInterval(()=>{
            setCounter(prevState=> prevState + 1)
        },1000)
        return()=>{
            clearInterval(timerRef.current)
        }
    },[])
  return (
    <>
    <div>
        {counter}
    </div>
    <button ref={timerRef} onClick={()=>clearInterval(timerRef.current)}>clear</button>

    </>
  )
}

export default HookTimer