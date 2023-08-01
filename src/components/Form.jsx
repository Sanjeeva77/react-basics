import React from 'react'
import { useState } from 'react'

export const Form = () => {
   const [username,setUsername] =useState('')
   const submitHandler=()=>(event)=>{
    event.preventDefault()
    alert(`Form Data is ${username}`)
   }
    return (
        <form onSubmit={submitHandler}>
        <div>
            <label>Username</label>
            <input type='text' value={username}
            onChange={(event)=>setUsername(event.target.value)}/>
        </div>
        <button type='submit'>Submit</button>
        </form>  
    )
}

//capture input from input element and have the data
//available for form submission
//manage with react
//1.Create state variable to handle the value and 
//change the value of this input element
//2.assign username to value attribute
//3.handling onChange event , automatically receive cahnge event as an argument
//use it to update username variable and keep track of changes to username
//4.submit form data

//click on submit button page refreshes, form has default html form behaviour
//of browsing to a new page when the submit button is clicked
//A common approach however is to execute a javascript function that handles submission of 
// form and that form will have access to the data the user enterted into the form 
