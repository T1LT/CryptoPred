import React, { useCallback } from "react";
import { Line } from "react-chartjs-2";

const Graph = ({ data, id, callback, time }) => {
  const handleClick = useCallback(() => callback(id), []);
  return (
    <div id="graphDiv" onClick={handleClick}>
      <div id="title">{id}</div>
      <Line
        width="500px"
        height="250px"
        id="lineGraph"
        data={{
          labels: time,
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
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    </div>
  );
};

export default Graph;
