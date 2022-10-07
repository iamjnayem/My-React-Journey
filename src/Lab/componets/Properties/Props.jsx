import React from 'react'

function Props(props) {
    console.log(props.data);
    console.log(typeof(props.data))
    
    return (
        <div>
            <h2>{props.data}</h2>
        </div>
    )
}

export default Props