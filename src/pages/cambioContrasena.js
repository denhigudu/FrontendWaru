import axios from "axios";
import React from "react";
// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Nueva Contraseña: </h1>
      <form onSubmit={newPassword}>
        <input
          type="text"
          placeholder="nombre de usuario"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </form>
      <form onSubmit={newPassword}>
        <input
          type="password"
          placeholder="Nueva contraseña"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </form>
      <form onSubmit={newPassword}>
        <button className="button" type="onSubmit">
          actualizar contraseña
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default CambioContrasena;
