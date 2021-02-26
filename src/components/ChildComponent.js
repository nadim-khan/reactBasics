import React from 'react'

function ChildComponent(props) {
    const data = {name:'Nadeem',post:'engineer'};
    return (
        <div>
            <button onClick={()=>props.greetHandler(data)}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
