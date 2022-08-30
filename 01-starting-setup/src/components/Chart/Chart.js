import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'


const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)// use spread operator to pull out all the array elemtns and add them as standalone elements because dataPointValues is an array 

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}

        </div>
    )
}

export default Chart