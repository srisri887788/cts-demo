import React from 'react'
const Stringify = ({context}) =>  {
    return (
        <pre>
            {JSON.stringify(context, null, 4)}
            
        </pre>
    )
}

export default Stringify
