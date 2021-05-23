import React from "react";
import Chart from "react-google-charts";

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
    <Chart
      id="cardChart"
      width={"750px"}
      height={"500px"}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["x", "value"],
        [0, 0],
        [1, 7],
        [2, 15],
        [3, 30],
        [4, 25],
        [5, 16],
        [6, 24],
        [7, 13],
        [8, 15],
        [9, 17],
        [10, 13],
        [11, 3],
      ]}
      options={{
        backgroundColor: { fill: "transparent" },
        hAxis: {
          title: "Date",
        },
        vAxis: {
          title: "Value",
        },
        legend: { position: "none" },
        animation: {
          startup: true,
          duration: 1000,
          easing: "out",
        },
      }}
      rootProps={{ "data-testid": "1" }}
    />

    <button onClick={close} id="closeButton">
      &times;
    </button>
  </div>
);

export default Card;
