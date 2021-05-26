import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./app.css";
import Mainpage from "./mainpage.jsx";

class Main extends React.Component {
  constructor() {
    super();
    this.state = { showingLanding: true };
    this.setLanding = this.setLanding.bind(this);
  }

  setLanding() {
    this.setState({ showingLanding: false });
  }

  render() {
    return !this.state.showingLanding ? (
      <Mainpage />
    ) : (
      <div id="landing" className="m-scene" onClick={this.setLanding}>
        <div
          id="header"
          className="m-header scene_element scene_element--fadeinup"
        >
          <h1>Cryptocurrency Price Predictor</h1>
        </div>
        <div
          id="proceedText"
          className="m-text scene_element scene_element--fadeinup"
        >
          <h2>Click to proceed</h2>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
