import React,{useState,useEffect} from 'react'
import axios from 'axios';

function FetchingData() {
    const [post, setPost]=useState({});
    const [id, setId]=useState(1);
    const [idFromButtonClick, setIdFromButtonClick]=useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response=>{
            console.log('useEffect resp : ',response.data)
            setPost( response.data)
        }).catch(err=>{
            console.log('useEffect error : ',err)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idFromButtonClick])
    
    return (
        <div>
            <h3>Example 4: useEffect Fetching Data</h3>
            <input type="number" value={id} onChange={e=> setId(e.target.value)}/>
            <button onClick={()=>setIdFromButtonClick(id)}>Get Post with Id = {id}</button>
            <div className="sectionsA">{post.id}. {post.title}</div>
            {/* {postData.length ? <ul>
                {postData.map(post=>
                <li key={post.id}> {post.title}</li>
                )}
            </ul> : <h4>No fetched data available</h4>} */}
        </div>
    )
}

export default FetchingData
