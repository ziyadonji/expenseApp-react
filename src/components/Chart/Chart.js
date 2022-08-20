import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPonts.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            maxValue={null}
            label={datapoint.label}
            value={dataPoint.value}
          ></ChartBar>
        );
      })}
    </div>
  );
};

export default Chart;
