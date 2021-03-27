import React,{useEffect,useState} from 'react'

function UseEffectCounter() {
    const initialValue =0;
    useEffect(()=>{
        document.title = `Count ${count}`
    })
    const [count,setCount] = useState(initialValue) //Array destructuring
    return (
        <div>
            <h3>UseEffect</h3>
            <h3>Example 1: Update the page title</h3>
            <button onClick={()=>setCount(prevState => prevState+1)}>Count : {count}</button>
        </div>
    )
}

export default UseEffectCounter
