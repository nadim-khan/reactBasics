import React, { Component } from 'react'

const floatIt = {
    float:'right',
    color:'yellow'
}
const fieldset = {
    float:'right',
    background:'gray'
}

class RenderProps extends Component {
    render() {
        console.log('render props',this.props)
        const {count, incrementCounter, hoverCount, incrementHover } = this.props;
        return (
            <div>
                <h3>Render Props</h3>
                Technique for sharing codes between componentsusing props whose value is a function<br/>
                <fieldset onMouseOver={incrementHover} style={fieldset} >Hover Over this section
                    <span style={floatIt}> Hover count : {hoverCount}</span>
                </fieldset>
                <button onClick={incrementCounter}> Clicked { count} times</button>
            </div>
        )
    }
}

export default RenderProps
