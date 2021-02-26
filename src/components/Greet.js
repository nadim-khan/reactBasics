import React from 'react';

const Greet = (props) =>  {
    console.log(props)
    return(
        <h6>Hello {props.name} (<span className="postClass">{props.post}</span>) {props.children}</h6>
    );
}
export default Greet;