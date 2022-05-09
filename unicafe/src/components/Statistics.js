import App from "../App"


const Statistics = (props) =>
{
    if (props.good > 0)
    {
        console.log('good > 0')
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

    if (props.neutral > 0)
    {
        console.log('neutral >0')
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

    if (props.bad > 0)
    {
        console.log('bad > 0')
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

    return (
        <p>No feedback given</p>)



}

export default Statistics