import React ,{useState}from 'react'

const UseStateArray = ()=> {
    const [items,setItems]=useState([]);
    const addItem =()=>{
        setItems([
            ...items,
            {
                id:items.length,
                value:Math.floor(Math.random()*10 +1)
            }
        ])
    }
    return (
        <div>
            <h3>Example 3 -  useState, State as Array</h3>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item) => 
                <li className="sectionsB" key={item.id}>{item.value}</li>
                    )}
            </ul>
        </div>
    )
}

export default UseStateArray
