import React from "react"
import Part from "./Part"
// props parts
const Content = (props) =>
{
    let array = []
    for (let a = 0; a < props.parts.length; a++)
    {
        array.push(<Part part={props.parts[a].name} exercises={props.parts[a].exercises} />)
    }
    return (
        <div>
            {array}
        </div>
    )
}

export default Content