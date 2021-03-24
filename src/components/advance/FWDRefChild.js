import React from 'react'

const FWDRefChild = React.forwardRef(
    (props,ref) => {
        return (
            <div>
                Child fwd ref <input type="text" ref={ref}/>
            </div>
        )
    }
) 

export default FWDRefChild
