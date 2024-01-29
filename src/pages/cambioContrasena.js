import axios from "axios";
import React from "react";
// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import "./login.css";
import waru1 from "../assets/waru1.png";

function CambioContrasena() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const newPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        "http://localhost:3001/api/changePassword",
        {
          username,
          password,
        }
      );
      if (response.data.success === true) {
        console.log(response.data);
        navigate("/login");
      } else {
        console.log(response.data);
        alert("no se pudo ingresar al sistema");
      }
    } catch (error) {
      setError("no hubo cambios de contraseña en el sistema");
    }
  };

  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: "#FF5C04",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <div>
          <img className="logo" src={waru1} alt="Logo de waru" />
          <h1 className="letreros">Nueva Contraseña: </h1>
          <form onSubmit={newPassword}>
            <input
              className="input"
              type="text"
              placeholder="nombre de usuario"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </form>
          <br />
          <form onSubmit={newPassword}>
            <input
              className="input"
              type="password"
              placeholder="Nueva contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </form>
          <br />
          <form onSubmit={newPassword}>
            <button className="button01" type="onSubmit">
              actualizar contraseña
            </button>
          </form>
        </div>
      </div>
      <Footer/>
      {error && <p>{error}</p>}
    </div>
  );
}

export default CambioContrasena;
