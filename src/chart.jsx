import React from "react";
import Chart from "react-google-charts";

const Graph = ({ data, id, callback }) => (
  <div onClick={() => callback(id)}>
    <Chart
      width={"500px"}
      height={"250px"}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        backgroundColor: { fill: "transparent" },
        hAxis: {
          title: "Date",
        },
        vAxis: {
          title: "Value",
        },
        legend: { position: "none" },
        // animation: {
        //   startup: true,
        //   duration: 0,
        //   easing: "out",
        // },
      }}
      rootProps={{ "data-testid": "1" }}
    />
  </div>
);

export default Graph;
