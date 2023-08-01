import React from 'react'

const MemoComp = ({name}) => {
    console.log('Rendering Memo Component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)

//something called HigherOrder Component React.memo()
//accepts a component and returns a new enhanced component 
//In this case a component capable of avoiding rerenders whenn 
//there is no change in props
//similar to Purecomponents it works with functional components 
//instead 
