import React from "react";
import Modal from "react-modal";
import "./reset.css";
import "./app.css";
import Graph from "./chart.jsx";
import Card from "./card.jsx";
import maindata from "./maindata.json";

const Mainpage = ({ callback, showingCard, cardTitle, close }) => (
  <div id="main" className="m-scene">
    <div id="header" className="m-header scene_element scene_element--fadeinup">
      <h1>Cryptocurrency Price Predictor</h1>
    </div>
    <div id="graphs">
      {Object.keys(maindata).map((key) => (
        <Graph key={key} data={maindata[key]} id={key} callback={callback} />
      ))}
    </div>
    <Modal
      isOpen={!!showingCard}
      onRequestClose={() => close()}
      className="Modal"
      overlayClassName="Overlay"
      ariaHideApp={false}
      closeTimeoutMS={200}
    >
      <Card id={cardTitle} close={close} />
    </Modal>
    <div id="footer">
      <h3>Click a graph to get the prediction and other details</h3>
    </div>
  </div>
);

export default Mainpage;
