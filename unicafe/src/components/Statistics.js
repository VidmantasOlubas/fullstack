import App from "../App"


const Statistics = (props) =>
{
    return (
        <div>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {props.all}</p>
            <p>avarage {props.avarage}</p>
            <p>positive {props.positive} %</p>
        </div>)
}

export default Statistics