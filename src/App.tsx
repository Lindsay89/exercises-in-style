import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Gallery } from "./components";
import firstImage from "./assets/images/1.jpg";
import secondImage from "./assets/images/2.jpg";
import thirdImage from "./assets/images/3.jpg";
import fourthImage from "./assets/images/4.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. My app
        </p>
        <Gallery images={[firstImage, secondImage, thirdImage, fourthImage]} />
      </header>
    </div>
  );
}

export default App;
