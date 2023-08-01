import { useState } from "react"


export const FunctionMessage=()=>{

    const[message,setMessage]=useState('Welcome Visitor')

    return(
        <div>
        <h1>{message}</h1>
        <button onClick={()=>setMessage('Thank You for Subscribing')}>Subscribe</button>
        </div>
    ) 

}