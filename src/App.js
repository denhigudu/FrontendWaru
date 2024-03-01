import React from "react";
import IndexHeader from "./components/AppPage/IndexHeader";
import "./css/App-style.css";
import { useState } from "react";
import Homewaru from "./assets/homewarú.png";
import Waruinfo from "./assets/waruinfo.png";
import Nombre_waru from "./assets/nombre_waru.png";
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
        src={Homewaru}
        className="homewaru"
        alt="slogan warú"
      />

      <img
        src={Waruinfo}
        className="waruinfo"
        alt="waruinfo"
      />

      <img
        src={Nombre_waru}
        className="nameWaru"
        alt="waruinfo"
      />
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
