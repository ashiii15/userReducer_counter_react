import React, { useContext } from 'react'
import { UserContex } from '../App'

function ComponentF() {
    const username = useContext(UserContex)
  return (
    <div>
        {
            username 
        }
       hekkki
        </div>
  )
}

export default ComponentF