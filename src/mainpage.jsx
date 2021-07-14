import React, { useState, useCallback, useEffect } from "react";
import Modal from "react-modal";
import "./reset.css";
import "./app.css";
import Graph from "./graph.jsx";
import Card from "./card.jsx";
import maindata from "./maindata.json";
import Footer from "./footer.jsx";
import { coinkeys, coinnames, parseResponse } from "./utils";

const Mainpage = () => {
  const [showingCard, setShowingCard] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const [apidata, setApiData] = useState({});
  const [loading, setLoading] = useState(false);

  const getUrl = (sym) =>
    `https://min-api.cryptocompare.com/data/histohour?fsym=${sym}&tsym=USD&limit=23`;
  useEffect(() => {
    const promiseArray = [];
    setLoading(true);
    coinkeys.forEach((element, index) => {
      const promise = fetch(getUrl(element))
        .then((res) => res.json())
        .then((response) =>
          setApiData((prevState) => ({
            ...prevState,
            [coinnames[index]]: parseResponse(response),
          }))
        );
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
          <p>loading...</p>
        ) : (
          <>
            <div id="graphs">
              {Object.keys(maindata).map((key) => (
                <Graph
                  key={key}
                  data={maindata[key]}
                  id={key}
                  callback={setID}
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
              <Card id={cardTitle} close={close} />
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
