import React from "react";
import ReactDOM from "react-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

const rootElement = document.getElementById('rootElement');

ReactDOM.render
(
  <div id="main-container">
    <Home/>
    <Footer/>
  </div>
  , rootElement
);
