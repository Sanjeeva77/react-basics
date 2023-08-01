import React from 'react'
import { Person } from './Person'

export const NamedList = () => {
    const names=['Mango','Grapes','Apple','Orange']
    const persons=[
        {
            id:1,
            name:'Sanjeeva',
            age:22,
            skill:'React'
        },
        {
            id:2,
            name:'Sanjeeva',
            age:30,
            skill:'React'
        },
        {
            id:3,
            name:'Sanjeeva',
            age:25,
            skill:'React Js'
        }
    ]

    const nameList=names.map((name,index)=><h2 key={index}> {index} {name}</h2>)
    const personList=persons.map(person=><Person key={person.id} person={person}/>)
    return (
        <div>
        {
            nameList
            // personList
        }
        </div>
    )
}
