import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {

    const [age,setage] = useState(26)
    const[salary,setSalary] =useState(50000)
    const incrementage =  useCallback(()=>{
        setage(age + 1)
    },[age])
    const incrementSalary = useCallback(()=>{
        setSalary(salary +1000)
    },[salary])

  return (
    <div>
        <Title></Title>
        <Count text="age" count={age}></Count>
        <Button increment = {incrementage} >add age</Button>
        <Count text='salary' count={salary}></Count>
        <Button increment={incrementSalary}>add salary</Button>
    </div>
  )
}

export default ParentComponent