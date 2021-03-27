import React,{useState} from 'react'

const  UseStateCounter = () => {
    const initialValue = 0;
    const [count,setCount] = useState(initialValue) //Array destructuring
    const incrementFive = ()=>{
        for(let i=0;i<5;i++){
            setCount(prevState=>prevState+1)
        }
    }
    return (
        <div>
            <h3>Example 1 - useState, State as value</h3>
            <div>Count : {count}</div>
            <button onClick={()=>setCount(initialValue)}>Reset</button>
            <button onClick={()=>setCount(prevState => prevState+1)}>Increment</button>
            <button onClick={()=>setCount(prevState => prevState-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment by 5</button>
        </div>
    )
}

export default UseStateCounter
