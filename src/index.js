import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./reset.css";
import "./app.css";
import Graph from "./chart.jsx";
import Card from "./card.jsx";
import maindata from "./maindata.json";

class Main extends React.Component {
  constructor() {
    super();
    this.state = { showingCard: false };
    this.setID = this.setID.bind(this);
    this.close = this.close.bind(this);
  }

  setID(id) {
    this.setState({ showingCard: id });
  }

  close() {
    this.setState({ showingCard: false });
  }

  render() {
    return (
      <div id="main">
        <div id="header">
          <h1>Cryptocurrency Price Predictor</h1>
        </div>
        <div id="graphs">
          {Object.keys(maindata).map((key) => (
            <Graph
              key={key}
              data={maindata[key]}
              id={key}
              callback={this.setID}
            />
          ))}
        </div>
        {this.state.showingCard && (
          <Modal
            isOpen={Boolean(this.state.showingCard)}
            onRequestClose={() => this.setState({ showingCard: false })}
            className="Modal"
            overlayClassName="Overlay"
            ariaHideApp={false}
          >
            <Card id={this.state.showingCard} close={this.close} />
          </Modal>
        )}
        <div id="footer">
          <h3>Click a graph to get the prediction and other details</h3>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
