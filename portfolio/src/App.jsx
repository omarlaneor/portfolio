import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Portfolio />
    </div>
  );
}

export default App;
