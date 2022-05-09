import App from "../App"
import StatisticLine from "./StatisticLine"


const Statistics = (props) =>
{
    if (props.good > 0)
    {
        
        return (
            <div>
                <table>
                    <StatisticLine text='good' value={props.good} />
                    <StatisticLine text='neutral' value={props.neutral} />
                    <StatisticLine text='bad' value={props.bad} />
                    <StatisticLine text='all' value={props.all} />
                    <StatisticLine text='avarage' value={props.avarage} />
                    <StatisticLine text='positive' value={props.positive} />
                </table>
            </div>)
    }

    if (props.neutral > 0)
    {
        
        return (
            <div>
                <table>
                    <StatisticLine text='good' value={props.good} />
                    <StatisticLine text='neutral' value={props.neutral} />
                    <StatisticLine text='bad' value={props.bad} />
                    <StatisticLine text='all' value={props.all} />
                    <StatisticLine text='avarage' value={props.avarage} />
                    <StatisticLine text='positive' value={props.positive} />
                </table>
            </div>)
    }

    if (props.bad > 0)
    {
        
        return (
            <div>
                <table>
                    <StatisticLine text='good' value={props.good} />
                    <StatisticLine text='neutral' value={props.neutral} />
                    <StatisticLine text='bad' value={props.bad} />
                    <StatisticLine text='all' value={props.all} />
                    <StatisticLine text='avarage' value={props.avarage} />
                    <StatisticLine text='positive' value={props.positive} />
                </table>
            </div>)
    }

    return (
        <p>No feedback given</p>)



}

export default Statistics