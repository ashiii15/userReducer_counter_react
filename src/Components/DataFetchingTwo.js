import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState ={
    loading : true,
    posts : [],
    error :''
}
 const reducer =(state,action)=>{
    switch(action.type){
        case 'FETCHING_SUCEES':
            return{
                loading :false,
                posts : action.payload,
                error :''
            }
            case 'FETCHING_ERROR':
                return{
                    loading :false,
                    posts : {},
                    error :'Something went wrong'
                }
                default :
                return state
    }

}

function DataFetchingTwo() {
 const [state,dispatch] =   useReducer(reducer,initialState)
 useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>{
        console.log(response.data);
        dispatch({
            type :'FETCHING_SUCEES',
            payload : response.data

        })
    })
    .catch((err)=>{
        dispatch({
            type : 'FETCHING_ERROR',

        })
    })

 },[])
  return (
    <div>
        { state.loading ? 'loading': state.posts.title }
        {state.err ? 'err':null}
    </div>
  )
}

export default DataFetchingTwo