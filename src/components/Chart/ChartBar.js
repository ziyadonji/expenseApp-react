import React from "react";
import "./ChartBar.css"

const ChartBar = (props) => {
    let barfillHeight="0%";

    if(props.value>0)
    {
        barfillHeight=props.value*100/props.maxValue+"%";

    }
    
    return (
        <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height:barfillHeight}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
        </div>
    );
    }

export default ChartBar;