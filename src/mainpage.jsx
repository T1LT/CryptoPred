import React, { useState, useCallback, useEffect, useRef } from "react";
import Modal from "react-modal";
import "./reset.css";
import "./app.css";
import Graph from "./graph.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  coinkeys,
  coinnames,
  wikilinks,
  parseData,
  parseTime,
  currencysymbols,
  coinrelations,
} from "./utils";

const Mainpage = () => {
  const [showingCard, setShowingCard] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const [apidata, setApiData] = useState({});
  const [apitime, setApiTime] = useState({});
  const [loading, setLoading] = useState(false);
  // const [currency, setCurrency] = useState("USD");
  const [coinsym, setCoinsym] = useState("");

  const getUrl = (symbol) =>
    `https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&limit=950`;
  useEffect(() => {
    const promiseArray = [];
    setLoading(true);
    coinkeys.forEach((element, index) => {
      const promise = fetch(getUrl(element))
        .then((res) => res.json())
        .then((response) => {
          setApiData((prevState) => ({
            ...prevState,
            [coinnames[index]]: parseData(response),
          }));
          setApiTime((prevState) => ({
            ...prevState,
            [coinnames[index]]: parseTime(response),
          }));
        });
      promiseArray.push(promise);
    });
    Promise.all(promiseArray).then(() => setLoading(false));
  }, []);
  const setID = useCallback((id) => {
    setShowingCard(true);
    setCardTitle(id);
    setCoinsym(coinrelations[id]);
  }, []);
  // ^ - the dependency array - this array takes values for comparing with previous
  // versions to decide whether or not to update the function passed as the first argument
  const close = () => setShowingCard(false);
  // const selectRef = useRef(null);
  // const updateCurrency = () => {
  //   setCurrency(selectRef.current.value);
  // };

  return (
    <div id="main" className="m-scene">
      <div id="subMain">
        <div
          id="header"
          className="m-header scene_element scene_element--fadeinup"
        >
          <h1>Cryptocurrency Price Predictor</h1>
        </div>
        {loading ? (
          <div id="loader">
            <CircularProgress />
          </div>
        ) : (
          <>
            <div id="graphs">
              {coinnames.map((key) => (
                <Graph
                  key={key}
                  data={apidata[key]}
                  id={key}
                  callback={setID}
                  time={apitime[key]}
                />
              ))}
            </div>
            <Modal
              isOpen={!!showingCard}
              onRequestClose={close}
              className="Modal"
              overlayClassName="Overlay"
              ariaHideApp={false}
              closeTimeoutMS={200}
            >
              <Card
                id={cardTitle}
                close={close}
                links={wikilinks}
                // currency={currency}
                // currencysymbols={currencysymbols}
                coinsymbol={coinsym}
              />
            </Modal>
            <div id="bottomText">
              <h3>Click a graph to get the prediction and other details</h3>
            </div>
          </>
        )}
      </div>
      {/* <div id="currencyMenu">
        <label>Select a currency:</label>
        <select id="currencies" name="currencies" ref={selectRef}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
          <option value="AUD">AUD</option>
          <option value="CNY">CNY</option>
        </select>
        <input type="button" value="Submit" onClick={updateCurrency} />
      </div> */}
      <Footer />
    </div>
  );
};

export default Mainpage;
