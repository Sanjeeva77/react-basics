import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
        //1.
        this.cbRef=null
        //2.
        this.setCbRef=element=>this.cbRef=element
    }
    //what exactly does this.inputRef holds
    //inputRef hold an object after the refrence is created
    //current points to the actual dom node
    componentDidMount(){
       // console.log(this.inputRef)
        //this.inputRef.current.focus()
        //react will call ref callback with the dom element when the component mounts
        //with null when component unmounts
        //3.
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                {/* //4. */}
                <input type='text' ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}


//As soon as page loads the input field get focused.
//Using refs this can be done in three simple steps
//1.create a ref -React.createRef().Common to create ref in constructor
//so that they can be refrenced throughout the application 
//2.Attach this ref to the input element in the render method and to attach ref we make use of the 
//reserved ref attribute.we now have refrence to the input element
//3.to call focus() method on this input element. 
