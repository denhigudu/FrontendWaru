import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CorreoContrasena() {
  const [mail, setMail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const sendMail = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/sendmail", {
        mail,
      });
      if (response.data.success === true) {
        console.log(response.data);
        navigate("/");
      } else {
        console.log(response.data);
        console.log("no ingresaste");
      }
    } catch (error) {
      setError("Log in equivocado");
    }
  };

  return (
    <div>
      <h1>Enviar link de recuperación de contraseña</h1>
      <form onSubmit={sendMail}>
        <input
          type="mail"
          placeholder="  Ingresa tu contraseña"
          value={mail}
          onChange={(event) => setMail(event.target.value)}
        />
        <button type="onSubmit">enviar correo</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default CorreoContrasena;
