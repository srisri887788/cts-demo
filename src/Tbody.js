import React from 'react'

function Tbody(props) {
    const {start, index} = props;
    return (
        <tr>
            <th>{start}</th>
            <td>*</td>
            <td>{index}</td>
            <td>= {parseInt(start) * (index + 1)}</td>
        </tr>
    )
}
export default Tbody