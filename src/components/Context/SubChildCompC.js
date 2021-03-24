import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class SubChildCompC extends Component {
    render() {
        return (
            <div className="sectionsC">
                <h5>SubChildCompC</h5>
                path : <code>ParentCompA/ChildCompB/SubChildCompC</code>
                <UserConsumer>
                    {
                        username => {
                            return <div>Hello {username}</div>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default SubChildCompC
