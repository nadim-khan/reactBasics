import React, { Component } from 'react'
import ChildCompB from './ChildCompB'

class ParentCompA extends Component {
    render() {
        return (
            <React.Fragment >
                 <h3>Context Example</h3>
                 Provides a wsay to pass the data through component tree without having to pass props down maually at every level<br/>
                <div className="sectionsA">
                <h5>ParentCompA</h5>
                <ChildCompB/>
                </div>
            </React.Fragment>
        )
    }
}

export default ParentCompA

