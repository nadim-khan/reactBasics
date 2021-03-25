import React, { Component } from 'react'
import axios from 'axios'

export class PostListPOST extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    postForm= (e)=>{
        e.preventDefault();
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{
            console.log('Axios POsts : ',response.data)
            
        })
        .catch(error=>{
            console.log(error)
            
        })
    }
    
    render() {
        const {userId, title, body} = this.state;
        return (
            <form onSubmit={this.postForm}>
                <div>
                    <label>USER ID </label>
                    <input type="number" name = "userId" value={userId} onChange={this.changeHandler}/>
                </div>
                <div>
                    <label>TITLE </label>
                    <input type="text" name = "title" value={title} onChange={this.changeHandler}/>
                </div>
                <div>
                    <label>DESCRIPTION </label>
                    <textarea type="text" name = "body" value={body} onChange={this.changeHandler}></textarea>
                </div>
                <button type="submit"> Post it </button>
            </form>
        )
    }
}

export default PostListPOST
