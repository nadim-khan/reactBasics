import React , {Component }from 'react';

class Message extends Component {
    constructor() {
        super()
        this.state = {
            msg:'Welcome Visitor'
        }
    }
    changeMessage(){
        alert()
        this.setState({
            msg:'Thank you for subscribing'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message