import {useEffect} from 'react'

function UseDocHook(counter) {
    useEffect(()=>{
        document.title =`count ${counter}`
    },[counter])
}

export default UseDocHook