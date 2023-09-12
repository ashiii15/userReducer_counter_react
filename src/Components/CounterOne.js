import React,{useReducer} from 'react'


function CounterOne() {
  const initialState = 0
const reducer =(state,action)=>{
  switch(action){
    case 'increment': 
    return state + 1
    case 'decrement':
      return state - 1
      case 'reset' :
        return initialState
        default :
        return state
  }

}
 const [count,disptach] = useReducer(reducer,initialState)
  return (
    <>
    <div>{count}</div>
    <button onClick={()=>disptach('increment')} >increment</button>
    <button onClick={()=>disptach('decrement')} >decrement</button>
    <button onClick={()=>disptach('reset')} >reset</button>
    

    </>
  )
}

export default CounterOne