import React, { Component } from 'react'
import HighrOrderFunc from './HighrOrderFunc'

const floatIt = {
    float:'right',
    color:'yellow'
}
const fieldset = {
    float:'right',
    background:'gray'
}

export class HighrOrder extends Component {
    render() {
        const {count, incrementCount, hoverCount, incremetHover,user } = this.props;
        return (
            <div>
                <h3>Higher Order Component</h3>
                <ul>
                    <li>Reusing Functionalities</li>
                    <li>Pattern where function takes component as an argument and return enhanced component</li>
                </ul>
                <fieldset onMouseOver={incremetHover} style={fieldset} >Hover Over this section
                    <span style={floatIt}>{user}'s Hover count : {hoverCount}</span>
                </fieldset>
                <button onClick={incrementCount}>{user} Clicked {count} times</button>
            </div>
        )
    }
}

export default HighrOrderFunc(HighrOrder)

