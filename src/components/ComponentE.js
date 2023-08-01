import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
    static contextType=UserContext
    render() {
        return (
            <div> 
                {/*in the render() method the context value is available as
                this.context */}
                Component E Context : {this.context}
                <ComponentF/>
            </div>
        )
    }
}

export default ComponentE

//assign userContext to the context type property on the class
// Component.contextType=UserContext

//works only with class component
//you can subscibe only to a sinlge context using context type
//many times in ur application you need to more than 
//one context in which scenario the consumer coponent is the way to go
