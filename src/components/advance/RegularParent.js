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
                [Pure Component] Regular parent component - compare previous and next stae and prop using shallow comparision
                if no change in state or prop then component will not be re rendered
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default RegularParent
