import React from "react";
import IndexHeader from "./layouts/IndexHeader";
import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormularioSignUp from "./pages/SignUp";
import homewarú from "./assets/homewarú.png";
import waruinfo from "./assets/waruinfo.png";
// Material UI
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function App() {
  const navigate = useNavigate();

  // VARIABLES
  const [error, setError] = useState("");

  // FUNCIONES
  const sign_in = async (event) => {
    event.preventDefault();
    try {
      navigate("/SignUp");
    } catch (error) {
      setError("Algo salio mal");
    }
  };

  const log_in = async (event) => {
    event.preventDefault();
    try {
      navigate("/Login");
      } catch (error) {
        setError("Algo salio mal");
      };
    }
   

  return (
    <div className="App">
      <IndexHeader/>
      <br />
      <img
        src={homewarú}
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

      {/* <form onSubmit={sign_in}>
        <Stack spacing={2} direction={"row-reverse"}>
          <Button
            variant="contained"
            className="button"
            type="submit"
            endIcon={<SendIcon />}
          >
            Registrarse
          </Button>
        </Stack>
      </form>
      <br />
      <form onClick={log_in}>
        <Stack spacing={2} direction={"row-reverse"}>
          <Button
            variant="contained"
            className="button"
            type="submit"
            endIcon={<SendIcon />}
          >
            Ingresar
          </Button>
        </Stack>
      </form> */}

      {/* <FormularioSignUp/> */}
    
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
