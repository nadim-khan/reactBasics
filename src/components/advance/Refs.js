import React, { Component } from 'react'

export class Refs extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    componentDidMount(){
        this.inputRef.current.focus();
        console.log('Points to Dom node ',this.inputRef);
        
    }
    fetchInput(){
        alert(this.inputRef.current.value);
    }
    
    render() {
        return (
            <div>
                <h2>Refs- Access DOM nodes within React</h2>
                Focused on start : <input type="text" name="input1" ref={this.inputRef}/>
                <button onClick={()=>{this.fetchInput()}}>Fetch Input</button>
            </div>
        )
    }
}

export default Refs
