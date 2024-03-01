import axios from "axios";
import { useState } from "react";
import "../css/SignUp-style.css";
import { useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import waru1 from "../assets/waru1.png";

export function FormularioSignUp() {
  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
        Navigate("/Dashboard");
      } else {
        console.log(response.data);
        alert("no se pudo ingresar al sistema");
      }
    } catch (error) {
      setError("correo usado, cambiar de correo electrónico");
    }
  };
  // Erased this function or commented when the team needs to make a DEMO
  const brincar = async (event) => {
    event.preventDefault();
    try {
      Navigate("/Dashboard");
    } catch (error) {
      setError("Algo salio mal");
    }
  };
  return (
    <div className="generalOrder">
      <Header />
      <div className="container">
        <form onSubmit={SignUp}>
          <div className="container-titles">
            <h1 className="title">SIGN UP</h1>
            <img className="logo" src={waru1} alt="Logotipo de Waru" />
          </div>
          <label>
            <h4>Nombre de Usuario:</h4>
            <input
              className="input"
              type="text"
              placeholder="Ingresa tu nombre de Usuario"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            <h4>Email:</h4>
            <input
              className="input"
              type="text"
              placeholder="Ingresa tu email"
              value={mail}
              onChange={(event) => setMail(event.target.value)}
            />
          </label>
          <label>
            <h4>Contraseña:</h4>
            <input
              className="input"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button
            type="submit"
            style={{
              backgroundColor: "#FF5C04",
              color: "#ffff",
              // padding: "10px",
              borderRadius: "20px",
              border: "1px solid #ffff",
              width: "70%",
              fontSize: "16px",
              fontFamily: "Black Avenir, sans-serif",
              // marginBottom: "30px",
              // marginTop: "16px",
            }}
          >
            Ingresar
          </button>
        </form>
      </div>
      {/* Erased this function or commented when the team needs to make a DEMO */}
      <div>
        <form onClick={brincar}>
          <button>Ir a Dashboard</button>
        </form>
      </div>
      {/* <Footer /> */}
      {error && <p>{error}</p>}
    </div>
  );
}

export default FormularioSignUp;
