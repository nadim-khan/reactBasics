import React, { Component } from 'react'
import FWDRefChild from './FWDRefChild'

class FWDRefParent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    onFocus(){
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                <h2>Forwarding Refs - Parent to child</h2>
                <FWDRefChild ref={this.inputRef}/>
                <button onClick={()=>{this.onFocus()}}>Focus Input</button>
            </div>
        )
    }
}

export default FWDRefParent
