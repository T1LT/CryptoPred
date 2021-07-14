import React, { useState, useCallback, useEffect } from "react";
import Modal from "react-modal";
import "./reset.css";
import "./app.css";
import Graph from "./graph.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import { coinkeys, coinnames, wikilinks, parseData, parseTime } from "./utils";

const Mainpage = () => {
  const [showingCard, setShowingCard] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const [apidata, setApiData] = useState({});
  const [apitime, setApiTime] = useState({});
  const [loading, setLoading] = useState(false);

  const getUrl = (sym) =>
    `https://min-api.cryptocompare.com/data/histoday?fsym=${sym}&tsym=USD&limit=950`;
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
  }, []);
  // ^ - the dependency array - this array takes values for comparing with previous
  // versions to decide whether or not to update the function passed as the first argument

  const close = () => setShowingCard(false);

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
          <p id="loadingp">loading...</p>
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
              <Card id={cardTitle} close={close} links={wikilinks} />
            </Modal>
            <div id="bottomText">
              <h3>Click a graph to get the prediction and other details</h3>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Mainpage;
