import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
// use useeffect for individual calls to the endpoint

export const Card = ({ id, close, links, coinsymbol }) => {
  const [todayPrice, setTodayPrice] = useState("");
  // const [preddata, setPreddata] = useState(null);
  useEffect(() => {
    fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${coinsymbol}&tsyms=USD`
    )
      .then((res) => res.json())
      .then((res) => setTodayPrice(res["USD"]));
  }, []);
  return (
    <div id="temp">
      <div id="cardStuff">
        <h1>
          <a href={links[id]} target="_blank" rel="noopener noreferrer">
            {id}
          </a>
        </h1>
        <br />
        <br />
        <br />
        <div id="cardText">
          <h2>Current Price: ${todayPrice}</h2>
          <h2>1-Day Forecast: ${todayPrice}</h2>
          <h2>7-Day Forecast: ${todayPrice}</h2>
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
};
export default Card;
