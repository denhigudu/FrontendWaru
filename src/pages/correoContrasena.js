import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import "./login.css";
import waru1 from "../assets/waru1.png";

function CorreoContrasena() {
  const [mail, setMail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const sendMail = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/sendLink", {
        mail,
      });
      if (response.data.success === true) {
        console.log(response.data);
        navigate("/");
      } else {
        console.log(response.data);
        console.log("correo no enviado");
      }
    } catch (error) {
      setError("ingresa un correo electronico");
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
          <h1 className="letreros">¿Olvidaste tu contraseña?</h1>
          <br />
          <p className="letreros">
            Escribe tu dirección de correo electrónico para
          </p>
          <p className="letreros">
            enviar los datos de recuperación de contraseña.
          </p>
          <form onSubmit={sendMail}>
            <br />
            <br />
            <input
              className="input"
              type="mail"
              placeholder="  Ingresa tu correo electronico"
              value={mail}
              onChange={(event) => setMail(event.target.value)}
            />
            <br />
            <br />
            <button className="button01" type="onSubmit">
              enviar correo
            </button>
          </form>
        </div>
      </div>
      <Footer />
      {error && <p>{error}</p>}
    </div>
  );
}

export default CorreoContrasena;
