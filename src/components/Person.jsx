import React from 'react'

export const Person = ({person}) => {
    return (
        <div>
           <h2>I am {person.name}.I am {person.age} years old .I know {person.skill}.</h2> 
        </div>
    )
}
