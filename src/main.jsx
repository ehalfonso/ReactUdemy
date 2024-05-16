import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./style/App.css";
import { FirstApp } from "./FirstApp.jsx";
import { CounterApp } from "./components/CounterApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp title="Hello, I'm Iron Man" /> */}
    <CounterApp value={20} />
  </React.StrictMode>
);
