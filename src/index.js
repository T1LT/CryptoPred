import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./app.css";
import Mainpage from "./mainpage.jsx";

class Main extends React.Component {
  constructor() {
    super();
    this.state = { showingCard: false, cardTitle: "", showingLanding: true };
    this.setID = this.setID.bind(this);
    this.setLanding = this.setLanding.bind(this);
    this.close = this.close.bind(this);
  }

  setID(id) {
    this.setState({ showingCard: true, cardTitle: id });
  }

  setLanding() {
    this.setState({ showingLanding: false });
  }

  close() {
    this.setState({ showingCard: false });
  }

  render() {
    if (!this.state.showingLanding) {
      return (
        <Mainpage
          callback={this.setID}
          showingCard={this.state.showingCard}
          cardTitle={this.state.cardTitle}
          close={this.close}
        />
      );
    } else {
      return (
        <div id="landing" onClick={this.setLanding}>
          <div id="header">
            <h1>Cryptocurrency Price Predictor</h1>
          </div>
          <h2>Click to proceed</h2>
        </div>
      );
    }
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
