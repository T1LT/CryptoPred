import React from "react";
import { Line } from "react-chartjs-2";

const Graph = ({ data, id, callback }) => (
  <div onClick={() => callback(id)}>
    <Line
      width={"500px"}
      height={"250px"}
      data={{
        labels: [
          "Fri",
          "Sat",
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
          "Mon",
          "Tue",
        ],
        datasets: [
          {
            data: data,
            fill: true,
            borderColor: "rgb(17, 149, 242)",
            borderWidth: 2,
            pointBackgroundColor: "rgb(17, 149, 242)",
          },
        ],
      }}
      options={{
        scales: {
          x: { beginAtZero: true },
          y: { beginAtZero: true },
        },
        plugins: { legend: { display: false } },
        layout: { padding: 20 },
      }}
    />
  </div>
);

export default Graph;
