import React from 'react'

function Child({count=2, color = '#ccddee'}) {
    console.log('hey i am calling out n number of times')
    return (
        <div style={{backgroundColor:color }}>
            {
                [...new Array(parseInt(count))].map((item, index) => <h1 key={index}> i am child</h1>)
            }
        </div>
    )
}

export default Child
