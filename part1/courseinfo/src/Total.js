import React from "react"

const Total = (props) =>
{
    let total = 0

    for (let i = 0; i < props.parts.length; i++)
    {
        total = total + props.parts[i].exercises
    }

    return (
        <div>
            <p> Number of exercises {total}</p>
        </div>
    )
}

export default Total