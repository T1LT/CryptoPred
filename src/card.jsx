import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { parsePredData, parsePredDays } from "./utils";
import CircularProgress from "@material-ui/core/CircularProgress";
// use useeffect for individual calls to the endpoint

export const Card = ({ id, close, links, coinsymbol }) => {
  const [todayPrice, setTodayPrice] = useState("");
  const [preddata, setPreddata] = useState(null);
  const [preddays, setPreddays] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${coinsymbol}&tsyms=USD`
    )
      .then((res) => res.json())
      .then((res) => setTodayPrice(res["USD"]));

    fetch(`http://localhost:8000/api/predictions/${id}/`)
      .then((res) => res.json())
      .then((res) => {
        setPreddata(parsePredData(res));
        setPreddays(parsePredDays(res));
        setloading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <div id="loader">
          <CircularProgress />
        </div>
      ) : (
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
              <h2>1-Day Forecast: ${preddata[1].toFixed(2)}</h2>
              <h2>7-Day Forecast: ${preddata[7].toFixed(2)}</h2>
            </div>
          </div>
          <Line
            id="cardChart"
            width={"750px"}
            height={"500px"}
            data={{
              labels: preddays,
              datasets: [
                {
                  data: preddata,
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
      )}
    </>
  );
};
export default Card;
