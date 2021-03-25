import React, { Component } from 'react'
import axios from 'axios'
import PostListPOST from './PostListPOST'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             postList:[],
             errorMsg:''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts23')
        .then(response=>{
            console.log('POsts : ',response.data)
            this.setState({
                postList:response.data
            })
        })
        .catch(error=>{
            console.log(typeof(error))
            this.setState({
                errorMsg:'GET: Error retrieving the data : '
            })
        })
    }
    
    render() {
        const {postList,errorMsg} = this.state;
        return (
            <div>
                <h3>HTTP</h3>
                <fieldset className="sectionsA">
                    <h6>POST</h6>
                    <PostListPOST/>
                    <h6>GET</h6>
                    <ul>
                        {
                            postList.length ? 
                            postList.map(post=>
                                <li key={post.id}>{post.title}</li>
                            ) :
                            null 
                        }
                        {
                            errorMsg ? errorMsg: null 
                        }
                    </ul>
                </fieldset>
            </div>
        )
    }
}

export default PostList
