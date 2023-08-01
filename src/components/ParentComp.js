import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'CGG'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'CGG'
            })
        },2000)
    }
    render() {
        console.log('********Parent Comp Render**********')
        return (
            <div>
               Parent Component 
               <MemoComp name={this.state.name}/>
               {/* <PureComp name={this.state.name}/>
               <RegComp name={this.state.name}/> */}
            </div>
        )
    }
}


export default ParentComp

//when the parent rerenders MemoComp also rerenders but the name prop 
//is going to saty the same with every rerender 
//so we need a way to avoid rerendering this MemoComp functional component 
//we can do that using React.memo()

//props are not changing so its better to avoid rerendering MemoComp
