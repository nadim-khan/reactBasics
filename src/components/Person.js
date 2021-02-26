import React from 'react'

function Person({person}) {
    return (
        <div>
            <h3> {person.id}. {person.name}({person.post})</h3>
        </div>
    )
}

export default Person
