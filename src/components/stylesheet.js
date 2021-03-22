import React from 'react';
import './MyStyles.css';

function stylesheet(props) {
    return (
        <div>
            <h1 className={`${props.primary? 'primary':'secondary'}  font-xl`} >Stylesheet</h1>
        </div>
    )
}

export default stylesheet
