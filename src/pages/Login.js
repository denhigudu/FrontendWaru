import "./formulario_login.css";
import { useState } from "react";
import waru1 from "../assets/waru1.png";
//import Dashboard from './Dashboard.js';
//import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../layouts/Header";

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
  //const history = useHistory(); // Obtenemos el objeto history

  // const handleLogin = () => {
  // Aquí podrías realizar la lógica de autenticación con axios o cualquier otra librería
  // const response = await axios.post('URL_DEL_BACKEND/login', {
  //     email: email,
  //     password: password,
  // });

  //     // Suponiendo que el backend devuelve un token de autenticación
  //     const authToken = response.data.token;

  //     // Guarda el token en el localStorage o en una cookie según tus necesidades
  //     localStorage.setItem('authToken', authToken);

  //     // Redirigir al dashboard después de la autenticación
  //     // Después de autenticar, redirigir al dashboard
  //     history.push('/dashboard');
  // };

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
  return (
    <div className="App">
    <section>
      <Header/>
      <br></br>
      <br></br>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                borderBottom: "1px solid #FF5C04",
                paddingBottom: "10px",
                marginLeft: "-7px",
                width: "200px",
                color: "#040B5E",
                fontFamily: "Avenir, sans-serif",
              }}
            >
              LOG IN
            </h1>
            <img
              src={waru1}
              style={{
                width: "250px",
                height: "60px",
                marginLeft: "50px",
                marginBottom: "30px",
              }}
              alt="Logo de waru"
            />
          </div>

          <label
            style={{
              marginBottom: "10px",
              display: "block",
              fontFamily: "Avenir, sans-serif",
              color: "#040B5E",
              fontSize: "20px",
            }}
          >
            Email:
            <br></br>
            <input
              type="text"
              placeholder="Ingresa tu email"
              value={mail}
              onChange={(event) => setMail(event.target.value)}
              style={{
                marginTop: "10px",
                width: "70%",
                padding: "10px",
                borderRadius: "20px",
                border: "1px solid #ddd",
                boxSizing: "border-box",
                fontSize: "14px",
                fontFamily: "Avenir, sans-serif",
                color: "#040B5E",
              }}
            />
          </label>
          <br></br>

          <label
            style={{
              marginBottom: "20px",
              display: "block",
              fontFamily: "Avenir, sans-serif",
              color: "#040B5E",
              fontSize: "20px",
            }}
          >
            Contraseña:
            <br></br>
            <input
              type="password"
              placeholder="  Ingresa tu contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={{
                marginTop: "10px",
                marginBottom: "-10px",
                width: "70%",
                padding: "10px",
                borderRadius: "20px",
                border: "1px solid #ddd",
                boxSizing: "border-box",
                fontSize: "14px",
                fontFamily: "Avenir, sans-serif",
                color: "#040B5E",
              }}
            />
          </label>
          {/* que significa el asterico en la ref */}
          <a
            href="#"
            style={{
              color: "#040B5E",
              fontFamily: "Avenir, sans-serif",
              fontSize: "13px",
              marginRight: "-150px",
            }}
          >
            ¿Olvidaste tu contraseña?
          </a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button
            /*onClick={handleLogin*/
            style={{
              backgroundColor: "#FF5C04",
              color: "#ffff",
              padding: "10px",
              borderRadius: "20px",
              border: "1px solid #ffff",
              width: "70%",
              fontSize: "16px",
              fontFamily: "Black Avenir, sans-serif",
            }}
          >
            Iniciar sesión
          </button>
          <br></br>
          <br></br>
        </form>
      </div>

      {/* Eliminar este button de brincar cuando funcione react con backend */}
      <form onClick={brincar}>
        <button>Ir a Dashboard</button>
      </form>
      {error && <p>{error}</p>}
    </section>
    </div>
  );
}

export default FormularioLogin;
