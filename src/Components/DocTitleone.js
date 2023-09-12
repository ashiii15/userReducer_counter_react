import React, { useState } from 'react'
import UseDocHook from './UseDocHook'

function DocTitleone() {
    const [counter,setCounter] = useState(0)
    UseDocHook(counter)
    
  return (
    <div>
        <button onClick={()=>setCounter(counter + 1)}>click {counter}</button>
    </div>
  )
}

export default DocTitleone