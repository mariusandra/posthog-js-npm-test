import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Uncomment this to init before rendering

// import posthog from "posthog-js";
// posthog.init("8jVz0YZ2YPtP7eL1I5l5RQIp-WcuFeD3pZO8c0YDMx4", {
//   api_host: "http://localhost:8000",
// });
// window.posthog = posthog;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
