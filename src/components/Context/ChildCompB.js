import React, { Component } from 'react'
import SubChildCompC from './SubChildCompC'

class ChildCompB extends Component {
    render() {
        return (
            <div className="sectionsB">
                <h5>ChildCompB</h5>
                path : <code>ParentCompA/ChildCompB</code>
                <SubChildCompC/>
            </div>
        )
    }
}

export default ChildCompB
