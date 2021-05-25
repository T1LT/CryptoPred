import React from "react";
import { Line } from "react-chartjs-2";

export const Card = ({ id, close }) => (
  <div id="temp">
    <div id="cardStuff">
      <h1>{id}</h1>
      <br />
      <br />
      <br />
      <div id="cardText">
        <h2>Current Price: 2142.45$</h2>
        <h2>1-Day Forecast: 2155.12$</h2>
        <h2>7-Day Forecast: 2315.29$</h2>
      </div>
    </div>
    <Line
      id="cardChart"
      width={"750px"}
      height={"500px"}
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
            data: [0, 7, 15, 30, 25, 16, 24, 13, 15, 17, 13, 3],
            fill: true,
            borderColor: "rgb(17, 149, 242)",
            borderWidth: 2,
            pointBackgroundColor: "rgb(17, 149, 242)",
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        responsive: false,
        layout: { padding: 30 },
      }}
    />
    <button onClick={close} id="closeButton">
      &times;
    </button>
  </div>
);

export default Card;
