import React from "react";
import Layout from "./components/Layout";
import RandomImage from "./components/RandomImage";
import About from "./components/About";
import OurStyle from "./components/OurStyle";
import Store from "./components/Store";
import Gallery from "./components/Gallery";
import Email from "./components/Email";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
           <Layout/>
           <RandomImage/>
           <About/>
           <OurStyle/>
           <Store/>
           <Gallery/>
           <Email/>
           <Footer/>
      </header>
    </div>
  );
}

export default App;
