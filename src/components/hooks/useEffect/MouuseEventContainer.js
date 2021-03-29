import React ,{useState}from 'react'
import HookMouse from './HookMouse'

function MouuseEventContainer() {
    const [display,setDisplay] = useState(true)
    return (
        <div>
            <h3>Example 3 - cleanup(memory leak problem, will unmount similarity)</h3>
            <button onClick={()=>setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse/>}
        </div>
    )
}

export default MouuseEventContainer
