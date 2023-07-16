import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
import Home from "./components/screens/home/Home";
import Router from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
