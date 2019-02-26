import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./styles.css";

import HelloComponent from "./examples/01";
import Hello from "./examples/02";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/1" component={HelloComponent} />
        <Route path="/2" component={Hello} />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
