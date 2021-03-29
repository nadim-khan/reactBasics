import React,{useEffect,useState} from 'react'

function UseEffectCounter() {
    const initialValue =0;
    const [count,setCount] = useState(initialValue) //Array destructuring
    const [name,setName] = useState('') //Array destructuring
    useEffect(()=>{
        document.title = `Count ${count}`;
        console.log('Updateing document title')
    },[count])
    
    return (
        <div>
            <h3>UseEffect</h3>
            <h3>Example 1: Update the page title</h3>
            <input type="text" name="name" value={name}onChange={e=> setName(e.target.value)}/>
            <button onClick={()=>setCount(prevState => prevState+1)}>Count : {count}</button>
        </div>
    )
}

export default UseEffectCounter
