import React, { useEffect } from 'react'
import logo from "./logo.svg";
import "./App.css";
import posthog from 'posthog-js'

function App() {
  // This loads posthog as late as possible - after React finished rendering
  useEffect(() => {
    posthog.init("8jVz0YZ2YPtP7eL1I5l5RQIp-WcuFeD3pZO8c0YDMx4", {
      api_host: "http://localhost:8000",
    });
    window.posthog = posthog;

    posthog.identify('testUser')
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button>Do something</button>
        <button>Yes</button>
        <button>Hola!</button>
        <button>Hey there</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
