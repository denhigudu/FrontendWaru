import React from "react";
import IndexHeader from "./layouts/IndexHeader";
import "./App.css";
import { useState } from "react";
import homewaru from "./assets/homewarú.png";
import waruinfo from "./assets/waruinfo.png";
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
          width: "1440px",
          height: "475px",
          marginLeft: "-1px",
          marginBottom: "30px",
        }}
        alt="slogan warú"
      />

      <img
        src={waruinfo}
        style={{
          marginTop: "0",
          width: "1248px",
          height: "720px",
          marginLeft: "-1px",
          marginBottom: "30px",
        }}
        alt="waruinfo"
      />
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
