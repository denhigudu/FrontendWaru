import "./formulario_login.css";
import axios from "axios";
import { useState } from "react";
import "./SignUp.css";
import waru1 from "../assets/waru1.png";
//import waru1 from "./assets/img/waru1.png";
import { useNavigate } from "react-router-dom";

export function FormularioSignUp() {
  const navigate = useNavigate();
  //variables a usar
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //funciones a usar
  const SignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/signin", {
        username,
        password,
        mail,
      });
      if (response.data.success === true) {
        console.log(response.data);
        navigate("/Dashboard");
      } else {
        console.log(response.data);
        alert("no se pudo ingresar al sistema");
      }
    } catch (error) {
      setError("correo usado, cambiar de correo electrónico");
    }
  };

  // eliminar esta función verificando que funcione con backend
  const brincar = async (event) => {
    event.preventDefault();
    try {
      navigate("/Dashboard");
    } catch (error) {
      setError("Algo salio mal");
    }
  };
  // -----------------------------------------------------------

  //todo lo que este arriba de return serán funciones a ejecutar
  //todo lo que este abajo de return sera lo que ve el usuario en su pantalla
  return (
    <section>
      <br></br>
      <br></br>
      <div className="borde">
        <form onSubmit={SignUp}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1 className="title">SIGN UP</h1>
            <img className="logo" src={waru1} alt="Logotipo de Waru" />
          </div>
          <div className="formulario" />
          <label className="user">
            Nombre de Usuario:
            <br></br>
            <input
              className="input"
              type="text"
              placeholder="Ingresa tu nombre de Usuario"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label className="email">
            Email:
            <br></br>
            <input
              className="input"
              type="text"
              placeholder="Ingresa tu email"
              value={mail}
              onChange={(event) => setMail(event.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label className="password">
            Contraseña:
            <br></br>
            <input
              className="input"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button className="button" type="submit">
            Ingresar
          </button>
        </form>
      </div>
      {/* Eliminar este button de brincar cuando funcione react con backend */}
      <form onClick={brincar}>
        <button>Ir a Dashboard</button>
      </form>
      {error && <p>{error}</p>}
    </section>
  );
}

export default FormularioSignUp;
