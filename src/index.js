//React
import React from "react";
import ReactDOM from "react-dom";

//CSS files
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./Assets/style.css";

//App Component
import App from "./App";

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
