import React, { Component } from 'react';
import RegularComp from './RegularComp'
import PureComp from './PureComp';
import MemoComp from './MemoComp';

export class RegularParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Nadeem'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Nadeem'
            })
        },3000)
    }
    
    render() {
        console.log('Parent controller render')
        return (
            <div>
                [Pure Componet] Regular parent component
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default RegularParent
