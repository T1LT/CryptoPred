import React from "react";
import { Line } from "react-chartjs-2";

const Graph = ({ data, id, callback }) => (
  <div onClick={() => callback(id)}>
    <Line
      width={"500px"}
      height={"250px"}
      data={{
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
