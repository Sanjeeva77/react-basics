 import React from 'react'
 import './mystyles.css'
 
 export const StyleSheets = (props) => {
    let className=props.primary?'primary':''
    return (
        <div>
           <h2 className={`${className} font-xl`}>StyleSheets</h2> 
        </div>
    )
 }
 