import React from 'react'
import ReactDom from 'react-dom'

function Portal() {
    return ReactDom.createPortal(
        <div>
            <h2>Portal Demo-required for popup,modal,tooltips</h2>
        </div>,
        document.getElementById('portal')
    )
}

export default Portal
