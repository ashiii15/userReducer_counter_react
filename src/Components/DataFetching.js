import React, { useEffect, useState } from "react";
import axios from "axios";
export const DataFetching =()=>{
    const [post,setPost] =useState({})
    const [id,setId] = useState(1)
    const [idFromBtnClick,setIdFromBtnClick] = useState(1)
    useEffect(()=>{
        console.log('useeffect');
        axios.get(`https://jsonplaceholder.typicode.com/posts/2${id}`)
        .then((Response)=>{
           setPost(Response.data) 
        })
        .catch((err)=>{
            setPost(err.message)
        })
    },[idFromBtnClick]);
     const clickHandler=()=>{
        setIdFromBtnClick(id)
    }
    return(
        <>
        <input value={id} onChange={(e)=>setId(e.target.value)}></input>
        <button value={idFromBtnClick} onClick={clickHandler}>click</button>
        <div>{post.title}</div>
        </>
    // <ul>
    //     {
    //         posts.map((post)=>{
    //             return <li key={post.id}>{post.name}</li>
    //         })
    //     }
    // </ul>
    )
}