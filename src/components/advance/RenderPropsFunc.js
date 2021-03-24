import React, { Component } from 'react'

export class RenderPropsFunc extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            hoverCount:0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }
    incrementHover = ()=>{
        this.setState(prevState => {
            return { hoverCount: prevState.hoverCount + 1 }
        })
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count,this.incrementCount,this.state.hoverCount,this.incrementHover)}
            </div>
        )
    }
}

export default RenderPropsFunc
