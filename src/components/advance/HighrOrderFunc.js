import React from 'react'

const highrOrderFunc = WrappedComponent => {
	class HighrOrderFunc extends React.Component {
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
				<WrappedComponent 
                count={this.state.count}
                hoverCount={this.state.hoverCount}
                incrementCount={this.incrementCount}
                {...this.props} // passing remaining props
                incremetHover={this.incrementHover} />
			)
		}
	}
	return HighrOrderFunc
}

export default highrOrderFunc
