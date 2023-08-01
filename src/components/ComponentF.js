import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        username=>(<div>Hello {username} </div>)
                        
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentF
