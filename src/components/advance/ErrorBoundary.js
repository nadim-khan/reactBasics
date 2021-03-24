import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log('Error : ',error);
        console.log('Info : ',info)
    }
    
    render() {
        if(this.state.hasError){
            return <h3>Something went wrong!</h3>
        } else {
            return this.props.children; //refer to the component which we are acually rendeering
        }
    }
}

export default ErrorBoundary
