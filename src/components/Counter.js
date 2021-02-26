import React , {Component }from 'react';

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    increment(){
        this.setState((previousState=>({
            count: previousState.count+1
        })))
        // this.setState({
        //     count : this.state.count + 1
        // },()=>{ console.log(this.state.count); });
        
    }
    decrement(){
        this.setState({
            count : this.state.count - 1
        });
    }
    IncrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
            <h1>Counter</h1>
            <h3>Count - {this.state.count}</h3>
            <button onClick={()=>this.increment()}>Increment</button>
            <button onClick={()=>this.decrement()}>Decrement</button>
            <button onClick={()=>this.IncrementFive()}>Increment Five</button>
            </div>
        )
    }
}

export default Counter