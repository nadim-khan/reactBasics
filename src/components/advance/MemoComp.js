import React from 'react'

function MemoComp(props) {
    console.log('Memo component render')
    return (
        <div className="sectionsB">
            Memo (Functional component) - {props.name}<br/>export default React.memo(MemoComp)
        </div>
    )
}

export default React.memo(MemoComp)
