import React, { useEffect, useState } from "react";
export const MousePosition  =()=>{
    const [X,setX] = useState(0)
    const [Y,setY] = useState(0)
    const mousePosition =(e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        window.addEventListener('mousemove',mousePosition)
        return(()=>{
            window.removeEventListener('mouseover',mousePosition)
        })
    })
    return(
        <div>X - {X} and Y - {Y}</div>
    )
}