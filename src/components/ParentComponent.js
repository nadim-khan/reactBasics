import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Parent'
        }

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(data) {
        alert(`Hello ${this.state.parentName} by ${data.name} (${data.post})` ); // ES6 template literals
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
