import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ColorList from "./components/ColorList";

const App = () => (
  <div className="container">
    <ColorList lista={[]} />
    <ColorList lista={["#0fcc7a", "#c90fcc"]} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
