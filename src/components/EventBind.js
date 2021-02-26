import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState({
            msg:'Goodbye ! '
        })
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <em>{this.state.msg}</em><br/>
                 {/* method 1 */}
                <button onClick={this.clickHandler}>Method 1</button> <br/>
                {/* method 2 - calling using arrow*/}
                <button onClick={()=> this.clickHandler()}>Method 2</button><br/>
                 {/* method 3 - using binding in cclass costructor */}
                <button onClick={this.clickHandler}>Method 3</button><br/>
                Open console
            </div>
        ) 
    }
}

export default EventBind
