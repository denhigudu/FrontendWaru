import React from "react";
import IndexHeader from "./layouts/IndexHeader";
import "./App.css";
import { useState } from "react";
import homewaru from "./assets/homewarú.png";
import waruinfo from "./assets/waruinfo.png";
import nombre_waru from "./assets/nombre_waru.png";
// Material UI

function App() {
  // VARIABLES
  const [error] = useState("");

  // FUNCIONES

  return (
    <div className="App">
      <IndexHeader />
      <br />
      <img
        src={homewaru}
        style={{
          marginTop: "2.8%",
          width: "100%",
          height: "50%",
          marginLeft: "0%",
          marginBottom: "3%",
          
        }}
        alt="slogan warú"
      />

      <img
        src={waruinfo}
        style={{
          marginTop: "0",
          width: "100%",
          height: "70%",
          marginLeft: "0",
          marginBottom: "3%",
          
        }}
        alt="waruinfo"
      />

      <img
        src={nombre_waru}
        style={{
          marginTop: "0",
          width: "100%",
          height: "70%",
          marginLeft: "0%",
          marginBottom: "3%",
        }}
        alt="waruinfo"
      />
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
