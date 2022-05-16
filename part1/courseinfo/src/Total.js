import React from "react"
//props parts
const Total = (props) =>
{
    let total = 0

    for (let i = 0; i < props.parts.length; i++)
    {
        total = total + props.parts[i].exercises
    }

    return (
        <div className='Total'>
            <p> total of {total} exercises</p>
        </div>
    )
}

export default Total