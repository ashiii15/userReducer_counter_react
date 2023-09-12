import React, { createRef, useEffect } from 'react'

function InputRef() {
    const UserRef = createRef(null)
    console.log('hi');
    useEffect(()=>{
        UserRef.current.focus()
    },[])
  return (
    <input ref={UserRef}></input>
  )
}

export default InputRef