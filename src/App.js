import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <Header />
      <br />
      <form onSubmit={sign_in}>
        <Stack spacing={2} direction={"row-reverse"}>
          <Button
            variant="contained"
            className="button"
            type="submit"
            endIcon={<SendIcon />}
          >
            Registrate
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
            Login
          </Button>
        </Stack>
      </form>
      <Footer/>
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
