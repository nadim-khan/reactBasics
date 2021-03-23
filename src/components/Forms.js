import React, { Component } from 'react'

export class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'Nadeem',
             comments:'',
             topics:'react'
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    handleChange = (event)=>{
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitForm(event) {
        console.log("A name was submitted: " + JSON.stringify(this.state));
        event.preventDefault();
      }
    
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div>
                    <label>Username</label>
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Topics</label>
                    <select name="topics" value={this.state.topics} onChange={this.handleChange}>
                        <option value='react'>React</option>
                        <option value='node'>Node</option>
                        <option value='vue'>Vue</option>
                        <option value='angular'>Angular</option>
                    </select>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea name="comments" value={this.state.comments} onChange={this.handleChange}></textarea>
                </div>
                <button type="submit">Submit </button>
            </form>
        )
    }
}

export default Forms
