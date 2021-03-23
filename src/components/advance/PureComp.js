import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log('Child controller render')
        return (
            <div>
                Pure component - {this.props.name}
            </div>
        )
    }
}

export default PureComp
