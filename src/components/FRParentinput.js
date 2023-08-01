import React, { Component } from 'react'
import { FRInput } from './FRInput'

class FRParentinput extends Component {
    constructor(props) {
        super(props)
        //1.   
        this.inputRef=React.createRef()
             
    }
    clickHandler=()=>{
        //ref points to native input element
        //not to FRinput instance
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                {/* //2. */}
                <FRInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentinput
