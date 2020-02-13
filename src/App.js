import React from "react";

import Graph from "./function";

import "./App.css";

function App() {
  return (
    <div
      style={{
        flex: 1,
        flexDirection: "column",
        background: "orange",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Graph />
      <h1>It is to append graph into body</h1>
    </div>
  );
}

export default App;
