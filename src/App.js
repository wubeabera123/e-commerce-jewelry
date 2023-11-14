import React from "react";
import Layout from "./components/Layout";
import RandomImage from "./components/RandomImage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
           <Layout/>
           <RandomImage/>
      </header>
    </div>
  );
}

export default App;
