import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    changeStatus(){
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }
    
    render() {

        // Approach 1-  If/Else 
        if(this.state.isLoggedIn) {
            return (
            <div>
                <em>Welcome Nadeem</em>
                <br/><button onClick={()=>this.changeStatus()}>Change Status</button>
            </div>
            )
        } else {
            return (
                <div>
                    <em>Welcome Guest</em>
                    <br/><button onClick={this.changeStatus.bind(this)}>Change Status</button>
                </div>
                )
        }

        //Approach 2 - Elementary Variable
        // let msg;
        // if(this.state.isLoggedIn) {
        //     msg= <em>Welcome Nadeem</em>
        // } else {
        //     msg= <em>Welcome Guest</em>
        // }
        // return msg


        //Approach 3 - Ternary Conditional Operator
        // return (
        //     this.state.isLoggedIn ? <em>Welcome Nadeem</em> : <em>Welcome Guest</em>
        // )

        //Approach 4 - Short Circuit method
        //return this.state.isLoggedIn && <em>Welcome Nadeem</em>;
        
    }
}

export default ConditionalRendering
