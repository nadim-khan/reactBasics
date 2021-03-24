import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log('Child controller render')
        return (
            <div className="sectionsA">
                Pure component - {this.props.name}<br/>PureComp extends PureComponent 
            </div>
        )
    }
}

export default PureComp
