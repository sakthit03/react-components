import React from "react";
import "./App.css";
import CounterComponent from "./components/CounterComponent.js";
import VerticalCounterComponent from "./components/VerticalCounterComponent.js";

function App() {
  return (
    <>
      <CounterComponent />
      <VerticalCounterComponent />
    </>
  );
}

export default App;
