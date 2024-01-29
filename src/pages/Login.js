import waru1 from "../assets/waru1.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./login.css";
import Header from "../layouts/Header";
// import Footer from "../layouts/Footer";

export function FormularioLogin() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        mail,
        password,
      });
      if (response.data.success === true) {
        console.log(response.data);
        navigate("/Dashboard");
      } else {
        console.log(response.data);
        console.log("no ingresaste");
      }
    } catch (error) {
      setError("Log in equivocado");
    }
  };

  // eliminar esta función verificando que funcione con backend
  const lostpassword = async (event) => {
    event.preventDefault();
    try {
      navigate("/correoContrasena");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  const brincar = async (event) => {
    event.preventDefault();
    try {
      navigate("/Dashboard");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  return (
    <div className="App">
      <section>
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
          <form onSubmit={login}>
            <div className="div">
              <h1 className="h1">LOG IN</h1>
              <img className="logo" src={waru1} alt="Logo de waru" />
            </div>
            <label className="letreros">
              Email:
              <br />
              <input
                type="text"
                placeholder="Ingresa tu email"
                value={mail}
                onChange={(event) => setMail(event.target.value)}
                className="input"
              />
            </label>
            <br />
            <label className="letreros">
              Contraseña:
              <br />
              <input
                type="password"
                placeholder="  Ingresa tu contraseña"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="input"
              />
            </label>
            <form onClick={lostpassword}>
              <button className="auxiliar">¿Olvidaste tu contraseña?</button>
            </form>
            <br />
            <br />
            <button className="button01">Iniciar sesión</button>
            <br />
            <br />
          </form>
        </div>

        <form onClick={brincar}>
          <button className="auxiliar2">Ir a Dashboard</button>
        </form>
        {/* <Footer /> */}
        {error && <p>{error}</p>}
      </section>
    </div>
  );
}

export default FormularioLogin;
