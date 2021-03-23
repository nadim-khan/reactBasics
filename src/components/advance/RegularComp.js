import React, { Component } from 'react'

export class RegularComp extends Component {
    render() {
        console.log('Child controller render')
        return (
            <div>
                Regular component - {this.props.name}
            </div>
        )
    }
}

export default RegularComp
