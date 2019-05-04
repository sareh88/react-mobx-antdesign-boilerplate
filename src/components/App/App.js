import React from "react";
import { Row, Button } from "antd";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="danger">Edit</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Mobx Ant
        </a>
      </header>
    </div>
  );
}

export default App;
